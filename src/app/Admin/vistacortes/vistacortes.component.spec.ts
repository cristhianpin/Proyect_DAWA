import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistacortesComponent } from './vistacortes.component';

describe('VistacortesComponent', () => {
  let component: VistacortesComponent;
  let fixture: ComponentFixture<VistacortesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistacortesComponent]
    });
    fixture = TestBed.createComponent(VistacortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
