import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeluquerosComponent } from './peluqueros.component';

describe('PeluquerosComponent', () => {
  let component: PeluquerosComponent;
  let fixture: ComponentFixture<PeluquerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeluquerosComponent]
    });
    fixture = TestBed.createComponent(PeluquerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
