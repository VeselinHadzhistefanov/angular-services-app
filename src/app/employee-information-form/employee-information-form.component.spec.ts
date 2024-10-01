import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationFormComponent } from './employee-information-form.component';

describe('EmployeeInformationFormComponent', () => {
  let component: EmployeeInformationFormComponent;
  let fixture: ComponentFixture<EmployeeInformationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInformationFormComponent]
    });
    fixture = TestBed.createComponent(EmployeeInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
