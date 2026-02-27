import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Raid_Dungeon, raidDungeons } from '../../raid-models/raid-models';
import { StarRatingModule } from 'angular-star-rating';
import { MatButton } from '@angular/material/button';
import { Encounterlist } from '../encounter-list/encounterlist';

@Component({
  selector: 'app-raid-dungeon-view',
  imports: [
    StarRatingModule,
    MatButton,
    Encounterlist
  ],
  templateUrl: './raid-dungeon-view.html',
  styleUrl: './raid-dungeon-view.css',
})
export class RaidDungeonView {
  rd = signal<Raid_Dungeon | null>(null);

  userRating = signal(0);

  avgDbRating = signal(5.5);

  private activatedRoute = inject(ActivatedRoute);

  getBorderClass(){
    return `border-${this.rd()?.colorName ?? 'gray-600'}`;
  }

  updateRating(event: any) {
    this.userRating.set(event.rating);
  }

  // TODO Add rating method with debouncing, use userRating value

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      const curr = raidDungeons.find((r) => r.path === params['path']);
      if (curr) this.rd.set(curr);
    });
  }
}
