import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeWarsComponent } from './shape-wars.component';

describe('ShapeWarsComponent', () => {
  let component: ShapeWarsComponent;
  let fixture: ComponentFixture<ShapeWarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeWarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
