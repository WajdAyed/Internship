import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private partService: ParticipantService,
    @Inject(MAT_DIALOG_DATA) public data: { part: any }) {

    this.myForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      landLine: [null, Validators.required],
      fax: [null, Validators.required],
      mobilePhone: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.myForm.patchValue({
      fullname: this.data.part.fullname,
      landLine: this.data.part.landLine,
      fax: this.data.part.fax,
      mobilePhone: this.data.part.mobilePhone,
      email: this.data.part.email,
    });

  }

  errMessage: string = '';

  onSubmit() {
    if (this.myForm.valid) {
      this.partService.updateParticipant(this.myForm.value, this.data.part.par_id).subscribe({
        next: (value: any) => {
          window.location.replace('/part_list');
        },
        error: (error: any) => {
          this.errMessage = error.error.message;
        },
        complete: () => {
          console.log("تم بنجاح!");
        }
      });
    } else {
      this.errMessage = "حدث خطأ ما!";
    }
  }

}
