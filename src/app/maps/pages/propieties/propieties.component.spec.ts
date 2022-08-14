import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietiesComponent } from './propieties.component';

describe('PropietiesComponent', () => {
  let component: PropietiesComponent;
  let fixture: ComponentFixture<PropietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropietiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
