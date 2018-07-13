import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-new-film',
    templateUrl: './new-film.component.html',
    styleUrls: ['./new-film.component.css']
})
export class NewFilmComponent implements OnInit {
    filmCreationForm: any;
    error: any;
    isSuccess = false;
    loading: boolean;
    constructor(private databearer: DataBearerService, private router: Router) {
    }

    ngOnInit() {
        this.filmCreationForm = {
            Name: '',
            Description: '',
            Rating: '',
            TicketPrice: '',
            Country: '',
            Genre: [{
                'value': ''
            }],
            Slug: '',
            Photo: '',
            RealeaseDate: '',
        };
    }
    addGenre() {
        event.preventDefault();
        event.stopPropagation();
        this.filmCreationForm.Genre.push({
            'value': ''
        });
    }
    removeGenre(index) {
        event.preventDefault();
        event.stopPropagation();
        this.filmCreationForm.Genre.splice(index, 1);
    }
    // ==========================================
    // inserting new film =======================
    // ==========================================
    createNewFilm(form: NgForm) {
        window.scrollTo(0, 0);
        this.loading = true;
        this.databearer.createNewFilm(this.filmCreationForm).subscribe((response: any) => {
            this.loading = false;
            if (response.status) {
                form.reset();
                this.isSuccess = true;
                this.router.navigate(['films']);
            } else if (response.message) {
                this.isSuccess = false;
                this.error = response.message;
            } else {
                this.isSuccess = false;
                this.error = response;
            }
        }, (error) => {
            this.loading = false;
            this.isSuccess = false;
            this.error = error.error.text;
        });
    }
}
