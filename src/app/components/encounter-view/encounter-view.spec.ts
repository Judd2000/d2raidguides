import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterView } from './encounter-view';

describe('EncounterView', () => {
  let component: EncounterView;
  let fixture: ComponentFixture<EncounterView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
