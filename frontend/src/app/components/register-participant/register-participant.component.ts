import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cycle } from 'src/app/models/cycle';
import { CycleService } from 'src/app/services/cycle.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-register-participant',
  templateUrl: './register-participant.component.html',
  styleUrls: ['./register-participant.component.css']
})
export class RegisterParticipantComponent implements OnInit {
  ngOnInit(): void {
    this.getAllCycles();
  }
  constructor(private cycleService: CycleService, private partService: ParticipantService) {
  }
  myForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    landLine: new FormControl('', [Validators.required]),
    fax: new FormControl('', [Validators.required]),
    mobilePhone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  errMessage: string = "";

  onSubmit() {
    if (this.myForm.valid && this.idCycle) {
      this.partService.registerParticipant(this.myForm.value, this.idCycle).subscribe({
        next: (value: any) => {
          alert('تم التسجيل بنجاح!');
          window.location.replace('/cycle_list');
        },
        error: (error: any) => {
          console.error(error); // قم بتسجيل الخطأ لأغراض تصحيح الأخطاء
          this.errMessage = error.error.message || "حدث خطأ ما!";
        }
      });
    } else {
      console.log(this.myForm.errors)
      this.errMessage = "هناك خطأ في البيانات!";
    }
  }


  cycles: Cycle[] = [];

  getAllCycles() {
    this.cycleService.getAllCycles().subscribe((data: any) => {
      this.cycles = data.data;
    });
  }

  idCycle: number = 0;
  onDataSelected(event: any) {
    console.log(event);
    if (event.value) {
      this.idCycle = event.value;
    }
  }
}
