import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Former } from 'src/app/models/former';
import { FormerService } from 'src/app/services/former.service';
import { UpdateFormerComponent } from '../update-former/update-former.component';

@Component({
  selector: 'app-former-list',
  templateUrl: './former-list.component.html',
  styleUrls: ['./former-list.component.css']
})
export class FormerListComponent {
  ngOnInit(): void {
    this.getFormers();
  }
  constructor(private formerService: FormerService, private dialog: MatDialog) { }
  formers: Former[] = [];
  displayedColumns: string[] = ['fullname', 'speciality', 'direction', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getFormers() {
    this.formerService.getAllFormers().subscribe((data: any) => {
      this.formers = data.data;
      console.log(this.formers);
      this.dataSource = new MatTableDataSource<any>(this.formers);
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

  errMessage: string = "";
  successMessage: string = "";
  deleteFormer(id: number) {
    this.formerService.deleteFormer(id).subscribe({
      next: (value: any) => {
        this.getFormers();
        this.errMessage = '';
        this.successMessage = value.message;
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (err: any) => {
        this.errMessage = err.error.message;
      },
      complete: () => {
        console.log("تمت العملية بنجاح!");
      }
    });
  }

  openUpdateDialog(former: any) {
    this.dialog.open(UpdateFormerComponent, {
      width: '400px',
      data: { former: former }
    })
  }
}
