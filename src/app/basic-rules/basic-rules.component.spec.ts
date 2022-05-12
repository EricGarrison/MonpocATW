import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRulesComponent } from './basic-rules.component';

describe('BasicRulesComponent', () => {
  let component: BasicRulesComponent;
  let fixture: ComponentFixture<BasicRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
