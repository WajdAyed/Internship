import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: { part : any[] }){}

  

}
