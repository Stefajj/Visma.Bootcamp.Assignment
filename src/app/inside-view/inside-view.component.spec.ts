import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideViewComponent } from './inside-view.component';

describe('InsideViewComponent', () => {
  let component: InsideViewComponent;
  let fixture: ComponentFixture<InsideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
