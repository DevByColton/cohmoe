import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevExperienceComponent } from './game-dev-experience.component';

describe('GameDevExperienceComponent', () => {
  let component: GameDevExperienceComponent;
  let fixture: ComponentFixture<GameDevExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDevExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDevExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
