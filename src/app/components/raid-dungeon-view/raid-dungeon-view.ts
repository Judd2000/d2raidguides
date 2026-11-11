import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Raid_Dungeon, raidDungeons } from '../../raid-models/raid-models';
import { StarRatingModule } from 'angular-star-rating';
import { MatButton } from '@angular/material/button';
import { Encounterlist } from '../encounter-list/encounterlist';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-raid-dungeon-view',
  imports: [
    StarRatingModule,
    Encounterlist,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './raid-dungeon-view.html',
  styleUrl: './raid-dungeon-view.css',
})
export class RaidDungeonView {
  rd = signal<Raid_Dungeon | null>(null);

  userRating = signal(0);

  avgDbRating = signal(5.5);

  private activatedRoute = inject(ActivatedRoute);

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
