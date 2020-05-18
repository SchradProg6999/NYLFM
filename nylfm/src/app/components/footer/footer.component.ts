import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AlertService, AuthProxy } from 'starter-ng-lib';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public contactForm: FormGroup

  constructor(
    // private alertService: AlertService,
    private fb: FormBuilder
    // private authProxy: AuthProxy,
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.email]]
      }
    )
  }

  sendEmail() {
    Object.keys(this.contactForm.controls).forEach(controlName => {
      this.contactForm.get(controlName).markAsDirty();
    });

    if(this.contactForm.valid) {
      var authData = {
        email: this.contactForm.get('email').value,
        message: this.contactForm.get('message').value
      };

      // this.alertService.toast("If an account with the email " + this.contactForm.get('email').value + " exists, you will receive an email with instructions to complete your forgotten password");

      // this.authProxy.forgotPassword(authData).then((res) => {
      //     authData = null;
      // },
      // err => {
      //   this.alertService.toastError("Something went wrong. Please try again.", "Error");
      //   console.log("Login Error:", err);
      // });
    }
  }

}
