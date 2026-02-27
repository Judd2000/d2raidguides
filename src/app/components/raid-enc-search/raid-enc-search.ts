import { Component, computed, Signal, signal } from '@angular/core';
import { MatFormField, MatInput, MatPrefix } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { dungeons, Encounter, Raid_Dungeon, raids } from '../../raid-models/raid-models';
import { MatCardModule } from '@angular/material/card';
import { Encounterlist } from '../encounter-list/encounterlist';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-raid-enc-search',
  imports: [
    MatInput,
    MatIconModule,
    MatPrefix,
    MatFormField,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    Encounterlist,
    RouterLink,
  ],
  templateUrl: './raid-enc-search.html',
  styleUrl: './raid-enc-search.css',
})
export class RaidEncSearch {
  search = signal<string>('');

  includeRaids = signal<boolean>(true);

  includeDungeons = signal<boolean>(true);

  getBorderClass(rd: Raid_Dungeon) {
    return `border-${rd.colorName}`;
  }

  filteredItems: Signal<Raid_Dungeon[]> = computed(() => {
    const curSearch = this.search().toLowerCase();

    const searchArr: Raid_Dungeon[] = [
      ...(this.includeRaids() ? raids : []),
      ...(this.includeDungeons() ? dungeons : [])
    ];


    return searchArr.flatMap((rd: Raid_Dungeon) => {
      let match = false;
      const res: Raid_Dungeon = { ...rd };
      if (rd.name.toLowerCase().includes(curSearch)) {
        match = true;
      }

      const visibleEncounters: Encounter[] = rd.encounters.filter((enc: Encounter) =>
        enc.encounterName.toLowerCase().includes(curSearch));

      if (visibleEncounters.length) {
        match = true;
        res.searchEncounters = visibleEncounters;
      }
      return match ? [res] : [];
    });
  });

  constructor() {
  }
}
