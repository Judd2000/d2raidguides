import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidDungeonView } from './raid-dungeon-view';

describe('RaidDungeonView', () => {
  let component: RaidDungeonView;
  let fixture: ComponentFixture<RaidDungeonView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaidDungeonView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidDungeonView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
