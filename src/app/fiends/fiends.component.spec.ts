import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiendsComponent } from './fiends.component';

describe('FiendsComponent', () => {
  let component: FiendsComponent;
  let fixture: ComponentFixture<FiendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
