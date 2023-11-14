import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';
import { UpdateParticipantComponent } from '../update-participant/update-participant.component';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  ngOnInit(): void {
    this.getParticants();
  }
  constructor(private partService: ParticipantService, private dialog: MatDialog) { }
  participants: Participant[] = [];
  displayedColumns: string[] = ['fullname', 'landline', 'fax', 'mobilephone', 'email', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getParticants() {
    this.partService.getAllParticipants().subscribe((data: any) => {
      this.participants = data.data;
      console.log(this.participants);
      this.dataSource = new MatTableDataSource<any>(this.participants);
      this.dataSource.paginator = this.paginator;
    })
  }

  search: string = "";
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.fullname.toLowerCase().includes(filter.trim().toLowerCase());
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openUpdateDialog(participant: any) {
    this.dialog.open(UpdateParticipantComponent, {
      width: '500px',
      data: { part: participant }
    })
  }


}
