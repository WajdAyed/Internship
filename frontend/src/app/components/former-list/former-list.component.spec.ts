import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerListComponent } from './former-list.component';

describe('FormerListComponent', () => {
  let component: FormerListComponent;
  let fixture: ComponentFixture<FormerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
