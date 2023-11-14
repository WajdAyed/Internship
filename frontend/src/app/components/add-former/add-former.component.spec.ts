import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormerComponent } from './add-former.component';

describe('AddFormerComponent', () => {
  let component: AddFormerComponent;
  let fixture: ComponentFixture<AddFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
