import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {DataBearerService} from '../data-bearer.service';
import {forEach} from "@angular/router/src/utils/collection";
@Component({
    selector: 'app-films-single',
    templateUrl: './films-single.component.html',
    styleUrls: ['./films-single.component.css']
})
export class FilmsSingleComponent implements OnInit {
    film: any;
    comments: any[];
    constructor(private route: ActivatedRoute,
                private router: Router, private databearer: DataBearerService) {
        this.route.params.subscribe((params: any) => {
            this.databearer.getBySlug(params.slug).subscribe((response: any) => {

                this.film = response[0];
            });
        });
    }

    ngOnInit() {
    }

    gotoList() {
        this.router.navigate(['films']);
    }

}
