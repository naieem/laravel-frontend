import {Component, OnInit} from '@angular/core';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    accessToken = localStorage.getItem('ACCESS_TOKEN');
    userName: string;
    isUserLoggedIn = false;
    loading: boolean;

    constructor(private databearerservice: DataBearerService) {
        this.databearerservice.loginStatusUpdated.subscribe((response: boolean) => {
            if (response) {
                this.getLoggedInUserInfo();
            }
        });
    }

    ngOnInit() {
        this.loading = true;
        if (!this.accessToken) {
            this.isUserLoggedIn = false;
            this.loading = false;
            this.databearerservice.setUserLoggedInStatus(false);
        } else {
            this.getLoggedInUserInfo();
        }
    }
    getLoggedInUserInfo() {
        this.databearerservice.getLoggedInUserInfo().subscribe((response: any) => {

            this.loading = false;
            if (response) {
                this.isUserLoggedIn = true;
                this.userName = response.name;
                this.databearerservice.userLoggedInStatusChanged.emit({
                    logged_in: true
                });
                this.databearerservice.setUserLoggedInStatus(true);
            }
        }, (error: any) => {

            this.loading = false;
            this.isUserLoggedIn = false;
            this.databearerservice.setUserLoggedInStatus(false);
            this.databearerservice.userLoggedInStatusChanged.emit({
                logged_in: false
            });
        });
    }
    logout() {
        event.preventDefault();
        event.stopPropagation();
        this.databearerservice.logout().subscribe((response: any) => {

            if (response && response.message) {
                this.isUserLoggedIn = false;
                this.databearerservice.userLoggedInStatusChanged.emit({
                    logged_in: false
                });
                this.databearerservice.setUserLoggedInStatus(false);
            }
        });
    }

}
