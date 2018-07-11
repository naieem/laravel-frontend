import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {DataBearerService} from '../data-bearer.service';
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
  constructor(private databearer: DataBearerService) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }
    // ===========================================
    // called after clicking the submit button ===
    // ===========================================
    loginUser() {
        this.loading = true;
        this.databearer.login(this.loginForm.value).subscribe((response: any) => {
            debugger;
            this.loading = false;
            if (response && response.status) {
                this.loginForm.reset();
                this.isSuccess = true;
            } else {
                this.isSuccess = false;
                this.error = response;
            }
        });
    }
}
