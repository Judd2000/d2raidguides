import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidEncSearch } from './raid-enc-search';

describe('RaidEncSearch', () => {
  let component: RaidEncSearch;
  let fixture: ComponentFixture<RaidEncSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaidEncSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidEncSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
