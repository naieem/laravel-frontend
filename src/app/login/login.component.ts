import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {DataBearerService} from '../data-bearer.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    error: any;
    isSuccess = false;
    loading: boolean;
    isUserLoggedIn = true;
    constructor(private router: Router, private databearer: DataBearerService) {
        this.loginForm = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }

    ngOnInit() {
        this.databearer.getLoggedInUserInfo().subscribe((response: any) => {
            if (response) {
                this.router.navigate(['films']);
            }
        }, (error: any) => {
            this.isUserLoggedIn = false;
        });
    }

    // ===========================================
    // called after clicking the submit button ===
    // ===========================================
    loginUser() {
        this.loading = true;
        this.databearer.login(this.loginForm.value).subscribe((response: any) => {
            
            this.loading = false;
            if (response && response.access_token) {
                this.loginForm.reset();
                this.isSuccess = true;
                localStorage.setItem('ACCESS_TOKEN', response.access_token);
                this.databearer.setUserLoggedInStatus(true);
                this.databearer.loginStatusUpdated.emit(true);
                this.router.navigate(['films']);
            } else {
                this.isSuccess = false;
                this.error = response;
            }
        });
    }
}
