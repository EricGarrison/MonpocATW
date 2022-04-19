import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagonsComponent } from './paragons.component';

describe('ParagonsComponent', () => {
  let component: ParagonsComponent;
  let fixture: ComponentFixture<ParagonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
