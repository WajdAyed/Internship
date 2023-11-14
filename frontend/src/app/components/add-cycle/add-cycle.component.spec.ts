import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCycleComponent } from './add-cycle.component';

describe('AddCycleComponent', () => {
  let component: AddCycleComponent;
  let fixture: ComponentFixture<AddCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
