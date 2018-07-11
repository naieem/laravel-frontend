import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-new-film',
    templateUrl: './new-film.component.html',
    styleUrls: ['./new-film.component.css']
})
export class NewFilmComponent implements OnInit {
    filmCreationForm: FormGroup;
    error: any;
    isSuccess = false;
    loading: boolean;
    constructor(private databearer: DataBearerService, private router: Router) {
    }

    ngOnInit() {
        this.filmCreationForm = new FormGroup({
            Name: new FormControl(),
            Description: new FormControl(),
            Rating: new FormControl(),
            TicketPrice: new FormControl(),
            Country: new FormControl(),
            Genre: new FormControl(),
            Slug: new FormControl(),
            Photo: new FormControl(),
            RealeaseDate: new FormControl()
        });
    }
    // ==========================================
    // inserting new film =======================
    // ==========================================
    createNewFilm() {
        this.loading = true;
        this.databearer.createNewFilm(this.filmCreationForm.value).subscribe((response: any) => {
            this.loading = false;
            if (response.status) {
                this.filmCreationForm.reset();
                this.isSuccess = true;
                this.router.navigate(['films']);
            } else {
                this.isSuccess = false;
                this.error = response.message;
            }
        });
    }
}
