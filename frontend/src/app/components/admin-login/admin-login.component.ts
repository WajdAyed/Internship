import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private authService: AuthService) { }

  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  errorMessage: string = "";

  login() {
    if (this.myForm.valid) {
      this.authService.adminLogin(this.myForm.value).subscribe({
        next: (value: any) => {
          localStorage.setItem('token', value.token);
          window.location.replace('/cycle_list');
        },
        error: (error: any) => {
          this.errorMessage = error.error.message;
        },
        complete: () => {
          console.log("اكتمل!");
        }
      });
    } else {
      this.errorMessage = "حدث خطأ ما!";
    }
  }

}
