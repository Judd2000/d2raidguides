import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encounterlist } from './encounterlist';

describe('Encounterlistitem', () => {
  let component: Encounterlist;
  let fixture: ComponentFixture<Encounterlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encounterlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encounterlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
