import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LewdComponent } from './lewd.component';

describe('LewdComponent', () => {
  let component: LewdComponent;
  let fixture: ComponentFixture<LewdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LewdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LewdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
