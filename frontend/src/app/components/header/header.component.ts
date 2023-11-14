import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.show = false;
    }
  }
  constructor(private authService: AuthService) { }
  @ViewChild('sidenav') sidenav!: MatSidenav;
  show: boolean = true;

  logout() {
    this.authService.logout();
    window.location.replace('/cycle_list');
  }
}
