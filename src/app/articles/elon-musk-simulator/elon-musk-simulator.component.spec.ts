import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElonMuskSimulatorComponent } from './elon-musk-simulator.component';

describe('ElonMuskSimulatorComponent', () => {
  let component: ElonMuskSimulatorComponent;
  let fixture: ComponentFixture<ElonMuskSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElonMuskSimulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElonMuskSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
