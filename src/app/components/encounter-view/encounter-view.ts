import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Encounter, raidDungeons } from '../../raid-models/raid-models';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-encounter-view',
  imports: [
    MatCard,
    MatIcon,
    RouterLink
  ],
  templateUrl: './encounter-view.html',
  styleUrl: './encounter-view.css',
})
export class EncounterView {

  encounter = signal<Encounter | null>(null);

  raidPath = signal('');

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.raidPath.set(params['path']);
      const encToSet = raidDungeons.find((rd) => rd.path === params['path'])?.encounters?.find((e) => e.path === params['encPath']);
      if (encToSet) this.encounter.set(encToSet);
      console.log('Encounter:', encToSet);
    })
  }
}
