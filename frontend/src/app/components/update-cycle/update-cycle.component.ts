import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CycleService } from 'src/app/services/cycle.service';

@Component({
  selector: 'app-update-cycle',
  templateUrl: './update-cycle.component.html',
  styleUrls: ['./update-cycle.component.css']
})
export class UpdateCycleComponent {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cycleService: CycleService,
    @Inject(MAT_DIALOG_DATA) public data: { cycle: any }) {

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      roomNumber: ['', Validators.required]

    });
  }
  ngOnInit(): void {
    this.myForm.patchValue({
      name: this.data.cycle.name,
      startDate: this.data.cycle.startDate,
      endDate: this.data.cycle.endDate,
      roomNumber: this.data.cycle.roomNumber
    });

  }

  errMessage: string = '';

  onSubmit() {
    if (this.myForm.valid) {
      this.cycleService.updateCycle(this.myForm.value, this.data.cycle.cycle_id).subscribe({
        next: (value: any) => {
          console.log(value);
          window.location.replace('/cycle_list');
        },
        error: (error: any) => {
          this.errMessage = error.error.message;
        },
        complete: () => {
          console.log("اكتمل الإجراء!");
        }
      });
    } else {
      this.errMessage = "حدث خطأ ما!";
    }
  }
}
