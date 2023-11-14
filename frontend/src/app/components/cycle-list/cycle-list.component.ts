import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cycle } from 'src/app/models/cycle';
import { CycleService } from 'src/app/services/cycle.service';
import { UpdateCycleComponent } from '../update-cycle/update-cycle.component';
import { AuthService } from 'src/app/services/auth.service';
import { PartListComponent } from '../part-list/part-list.component';

@Component({
  selector: 'app-cycle-list',
  templateUrl: './cycle-list.component.html',
  styleUrls: ['./cycle-list.component.css'],
})
export class CycleListComponent implements OnInit {
  ngOnInit(): void {
    this.getAllCycles();
    if (!this.authService.isLoggedIn()) {
      this.show = false;
    }

  }

  constructor(private cycleService: CycleService, private dialog: MatDialog, private authService: AuthService) { }
  cycles: Cycle[] = [];
  search: string = "";
  start: Date | undefined;
  end: Date | undefined;
  room: number | undefined;
  filterCycles: Cycle[] = [];
  show: boolean = true;

  getAllCycles() {
    this.cycleService.getAllCycles().subscribe((data: any) => {
      console.log(data)
      this.cycles = this.filterCycles = data.data;
    });
  }

  filterOption(): void {
    console.log(this.start)
    this.filterCycles = this.cycles.filter(a => {
      let startMatch = true;
      let endMatch = true;
      let nameMatch = true;
      let roomMatch = true;

      if (this.start) {
        startMatch = new Date(a.startDate).getTime() >= new Date(this.start).getTime();
      }

      if (this.end) {
        endMatch = new Date(a.endDate).getTime() <= new Date(this.end).getTime();
      }

      if (this.search) {
        nameMatch = a.name.toLowerCase().includes(this.search.toLowerCase());
      }

      if (this.room) {
        roomMatch = a.roomNumber == this.room;
      }

      return startMatch && endMatch && nameMatch && roomMatch;
    });
  }

  openUpdateDialog(cycle: any) {
    this.dialog.open(UpdateCycleComponent, {
      maxWidth: '600px',
      data: { cycle: cycle }
    })
  }

  deleteCycle(id: number) {
    this.cycleService.deleteCycle(id).subscribe({
      next: (value: any) => {
        this.getAllCycles();
      },
      error: (err: any) => {
        console.error("Error", err);
      }
    });
  }

  openParticipants(part: any[]) {
    this.dialog.open(PartListComponent, {
      maxWidth: '600px',
      data: { part: part }
    })
  }

  selectedCycle: any;
  showPart: boolean = false;
  selectCycle(cycle: any) {
    this.selectedCycle = cycle;
    this.showPart = true;
  }

}
