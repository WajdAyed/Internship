import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormerService } from 'src/app/services/former.service';

@Component({
  selector: 'app-update-former',
  templateUrl: './update-former.component.html',
  styleUrls: ['./update-former.component.css']
})
export class UpdateFormerComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formerService: FormerService,
    @Inject(MAT_DIALOG_DATA) public data: { former: any }) {

    this.myForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      speciality: ['', Validators.required],
      direction: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.myForm.patchValue({
      fullname: this.data.former.fullname,
      speciality: this.data.former.speciality,
      direction: this.data.former.direction
    });
  }

  errMessage: string = '';

  onSubmit() {
    if (this.myForm.valid) {
      this.formerService.updateFormer(this.myForm.value, this.data.former.former_id).subscribe({
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
