import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedAssets } from './used-assets.component';

describe('UsedColors', () => {
  let component: UsedAssets;
  let fixture: ComponentFixture<UsedAssets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedAssets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedAssets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
