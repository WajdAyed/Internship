import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Former } from 'src/app/models/former';
import { CycleService } from 'src/app/services/cycle.service';
import { FormerService } from 'src/app/services/former.service';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.css']
})
export class AddCycleComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cycleService: CycleService,
    private formerService: FormerService
  ) {

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      roomNumber: ['', Validators.required]

    });
  }
  ngOnInit(): void {
    this.getFormers();
  }
  formers: Former[] = []
  getFormers() {
    this.formerService.getAllFormers().subscribe((data: any) => {
      this.formers = data.data;
      console.log(this.formers);
    })
  }

  errMessage: string = '';

  selectedValue: any;


  formerIds: number[] = [];

  onDataSelected(event: any) {
    console.log(event)
    if (event.value) {
      this.formerIds = event.value ; 
      console.log(this.formerIds);
    }
  }


  onSubmit() {
    if (this.myForm.valid) {
      this.cycleService.addCycle(this.myForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.formerIds.forEach(elem =>{
            this.cycleService.addFormerToCycle(elem , value.data.cycle_id).subscribe(data => console.log(data));
          });
          window.location.replace('/cycle_list');
        },
        error: (error: any) => {
          this.errMessage = error.error.message;
        },
        complete: () => {
          console.log("اكتمل!");
        }
      });
    } else {
      this.errMessage = "حدث خطأ ما!";
    }
  }

}
