import {Component, OnInit} from '@angular/core';
import {DataBearerService} from '../data-bearer.service';
import {Router} from '@angular/router';
import {Film} from './film';
@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
    allFilms: Film[] = [];
    total: any;
    presentCount = 0;
    loading = true;
    constructor(private router: Router, private databearer: DataBearerService) {
    }

    ngOnInit() {
        this.databearer.getAllFilms().subscribe((response: any) => {
            this.loading = false;
            this.allFilms = response.data;
            this.total = response.total;
            this.presentCount = 0;
        });
    }

    gotoNextFilm() {
        this.loading = true;
        this.allFilms = [];
        this.presentCount++;
        this.databearer.getByComplexQuery(this.presentCount).subscribe((response: any) => {
            this.loading = false;
            this.allFilms = response;
        });
    }
    gotoPreviousFilm() {
        this.loading = true;
        this.allFilms = [];
        this.presentCount--;
        this.databearer.getByComplexQuery(this.presentCount).subscribe((response: any) => {
            this.loading = false;
            this.allFilms = response;
        });
    }

    gotoDetails(slug: string) {
        event.preventDefault();
        event.stopPropagation();
        this.router.navigate(['film', slug]);
    }

}
