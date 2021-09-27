import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBenefiComponent } from './details-benefi.component';

describe('DetailsBenefiComponent', () => {
  let component: DetailsBenefiComponent;
  let fixture: ComponentFixture<DetailsBenefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBenefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBenefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
