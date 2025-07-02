import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarKeeperComponent } from './star-keeper.component';

describe('StarKeeperComponent', () => {
  let component: StarKeeperComponent;
  let fixture: ComponentFixture<StarKeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarKeeperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
