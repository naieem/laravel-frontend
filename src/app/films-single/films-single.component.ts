import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-films-single',
    templateUrl: './films-single.component.html',
    styleUrls: ['./films-single.component.css']
})
export class FilmsSingleComponent implements OnInit, AfterViewInit {
    film: any;
    comments: any[];
    isUserloggedIn: boolean;
    constructor(private route: ActivatedRoute,
                private router: Router, private databearer: DataBearerService) {
        this.route.params.subscribe((params: any) => {
            this.databearer.getBySlug(params.slug).subscribe((response: any) => {
                this.film = response[0];
            });
        });
        this.databearer.userLoggedInStatusChanged.subscribe((response: any) => {
            if (response && response.logged_in) {
                this.isUserloggedIn = true;
            } else {
                this.isUserloggedIn = false;
            }
        });
    }

    ngOnInit() {}
    ngAfterViewInit() {
        if (this.databearer.getUserLoggedInStatus()) {
            this.isUserloggedIn = true;
        } else {
            this.isUserloggedIn = false;
        }
    }

    gotoList() {
        this.router.navigate(['films']);
    }

}
