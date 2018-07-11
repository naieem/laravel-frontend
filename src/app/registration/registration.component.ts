import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {DataBearerService} from '../data-bearer.service';
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup;
    error: any;
    isSuccess = false;
    loading: boolean;
    constructor(private databearer: DataBearerService) {
    }

    ngOnInit() {
        this.registrationForm = new FormGroup({
            name: new FormControl(),
            email: new FormControl(),
            password: new FormControl()
        });
    }
    // ===========================================
    // called after clicking the submit button ===
    // ===========================================
    registerNewUser() {
        this.loading = true;
        this.databearer.registernewuser(this.registrationForm.value).subscribe((response: any) => {
            this.loading = false;
            if (response && response.status) {
                this.registrationForm.reset();
                this.isSuccess = true;
            } else {
                this.isSuccess = false;
                this.error = response;
            }
        });
    }

}
