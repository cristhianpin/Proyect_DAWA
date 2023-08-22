import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegistroComponent } from './menu-registro.component';

describe('MenuRegistroComponent', () => {
  let component: MenuRegistroComponent;
  let fixture: ComponentFixture<MenuRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuRegistroComponent]
    });
    fixture = TestBed.createComponent(MenuRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
