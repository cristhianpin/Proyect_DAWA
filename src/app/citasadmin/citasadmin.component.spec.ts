import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasadminComponent } from './citasadmin.component';

describe('CitasadminComponent', () => {
  let component: CitasadminComponent;
  let fixture: ComponentFixture<CitasadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitasadminComponent]
    });
    fixture = TestBed.createComponent(CitasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
