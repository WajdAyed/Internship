import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormerComponent } from './update-former.component';

describe('UpdateFormerComponent', () => {
  let component: UpdateFormerComponent;
  let fixture: ComponentFixture<UpdateFormerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
