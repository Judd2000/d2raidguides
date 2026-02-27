import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Encounter, raidDungeons } from '../../raid-models/raid-models';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Strategy } from '../../raid-models/strategy';
import { MatButton } from '@angular/material/button';
import { StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-encounter-view',
  imports: [
    MatCard,
    MatIcon,
    RouterLink,
    MatButton,
    StarRatingModule
  ],
  templateUrl: './encounter-view.html',
  styleUrl: './encounter-view.css',
})
export class EncounterView {

  encounter = signal<Encounter | null>(null);

  raidPath = signal('');

  private activatedRoute = inject(ActivatedRoute);

  // TODO: GET STRATEGIES FROM DB using API.

  strategies = signal<Strategy[]>([
    {
      user: 'Ralph Waldo',
      userImg: 'empty',
      content:
        'Sed scelerisque rhoncus est. Integer rhoncus eget risus sit amet congue. Ut porta feugiat neque. Fusce nec nunc at neque ultricies rhoncus eget a mi. Aenean quis suscipit ligula. Quisque porta enim diam, in bibendum diam pharetra a. Quisque aliquam ornare cursus.\n' +
        '\n' +
        'Proin non nisi risus. Praesent sit amet pretium ligula. Morbi facilisis feugiat lacus quis sagittis. Nullam blandit, felis et euismod vulputate, elit enim lacinia felis, non porttitor nibh orci vitae nisl. Fusce sodales sem id consequat posuere. Nullam non enim ante. Vestibulum interdum ornare mauris, vitae scelerisque velit scelerisque et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis non felis aliquam, mollis diam egestas, venenatis purus. Cras ornare turpis a sapien lobortis, ut rutrum massa eleifend. Cras maximus, odio sit amet commodo.',
      rating: 4.5,
      mostValuedWeapons: [],
      mostValuedAbilities: [],
    },
    {
      user: 'Emerson',
      userImg: 'empty',
      content: 'Fusce finibus, urna ac facilisis congue, purus velit eleifend augue, eu egestas ligula massa et ipsum. Ut eu maximus velit, at luctus elit. Donec sollicitudin imperdiet fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet dictum blandit. Ut pellentesque diam tellus. Aliquam ut tincidunt nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada est eros, et maximus nibh placerat a. Praesent id lacus non dui semper blandit. Ut commodo quam ut commodo aliquet. Mauris ac tellus vel tellus semper tristique. Proin pellentesque tristique nulla vitae sagittis. Vestibulum erat ipsum, tincidunt id mollis vel, cursus ac massa. Cras fermentum efficitur dui, nec maximus mauris ullamcorper a. Duis pharetra nisi a congue malesuada.',
      rating: 10,
      mostValuedWeapons: [],
      mostValuedAbilities: [],
    },
  ]);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.raidPath.set(params['path']);
      const encToSet = raidDungeons.find((rd) => rd.path === params['path'])?.encounters?.find((e) => e.path === params['encPath']);
      if (encToSet) this.encounter.set(encToSet);
    })
  }
}
