import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalModelComponent } from './global-model.component';

describe('GlobalModelComponent', () => {
  let component: GlobalModelComponent;
  let fixture: ComponentFixture<GlobalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
