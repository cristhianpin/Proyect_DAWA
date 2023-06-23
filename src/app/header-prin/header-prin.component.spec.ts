import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPrinComponent } from './header-prin.component';

describe('HeaderPrinComponent', () => {
  let component: HeaderPrinComponent;
  let fixture: ComponentFixture<HeaderPrinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPrinComponent]
    });
    fixture = TestBed.createComponent(HeaderPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
