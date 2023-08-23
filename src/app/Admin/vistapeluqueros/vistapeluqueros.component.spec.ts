import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistapeluquerosComponent } from './vistapeluqueros.component';

describe('VistapeluquerosComponent', () => {
  let component: VistapeluquerosComponent;
  let fixture: ComponentFixture<VistapeluquerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistapeluquerosComponent]
    });
    fixture = TestBed.createComponent(VistapeluquerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
