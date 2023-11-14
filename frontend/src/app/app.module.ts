import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateParticipantComponent } from './components/update-participant/update-participant.component';
import { FormerListComponent } from './components/former-list/former-list.component';
import { UpdateFormerComponent } from './components/update-former/update-former.component';
import { AddFormerComponent } from './components/add-former/add-former.component';
import { CycleListComponent } from './components/cycle-list/cycle-list.component';
import { MyDatePipe } from './utils/pipes/my-date.pipe';
import { FormerListPipe } from './utils/pipes/former-list.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateCycleComponent } from './components/update-cycle/update-cycle.component';
import { AddCycleComponent } from './components/add-cycle/add-cycle.component';
import { RegisterParticipantComponent } from './components/register-participant/register-participant.component';
import { PartListComponent } from './components/part-list/part-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    ParticipantListComponent,
    UpdateParticipantComponent,
    FormerListComponent,
    UpdateFormerComponent,
    AddFormerComponent,
    CycleListComponent,
    MyDatePipe,
    FormerListPipe,
    UpdateCycleComponent,
    AddCycleComponent,
    RegisterParticipantComponent,
    PartListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
