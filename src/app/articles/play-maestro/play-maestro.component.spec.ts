import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMaestroComponent } from './play-maestro.component';

describe('PlayMaestroComponent', () => {
  let component: PlayMaestroComponent;
  let fixture: ComponentFixture<PlayMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayMaestroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
