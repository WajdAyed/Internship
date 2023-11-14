import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormerService } from 'src/app/services/former.service';

@Component({
  selector: 'app-add-former',
  templateUrl: './add-former.component.html',
  styleUrls: ['./add-former.component.css']
})
export class AddFormerComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formerService: FormerService) {

    this.myForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      speciality: ['', Validators.required],
      direction: ['', Validators.required]

    });
  }
  ngOnInit(): void {

  }

  errMessage: string = '';

  onSubmit() {
    if (this.myForm.valid) {
      this.formerService.addFormer(this.myForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          window.location.replace('/former_list');
        },
        error: (error: any) => {
          this.errMessage = error.error.message;
        },
        complete: () => {
          console.log("تم الانتهاء!");
        }
      });
    } else {
      this.errMessage = "حدث خطأ ما!";
    }
  }
}
