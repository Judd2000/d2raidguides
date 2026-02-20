import { Component, computed, Signal, signal } from '@angular/core';
import { MatFormField, MatInput, MatPrefix } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { dungeons, Encounter, Raid_Dungeon, raids } from '../../raid-models/raid-models';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-raid-enc-search',
  imports: [
    MatInput,
    MatIconModule,
    MatPrefix,
    MatFormField,
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  templateUrl: './raid-enc-search.html',
  styleUrl: './raid-enc-search.css',
})
export class RaidEncSearch {
  search = signal<string>('');

  includeRaids = signal<boolean>(true);

  includeDungeons = signal<boolean>(true);

  filteredItems: Signal<Raid_Dungeon[]> = computed(() => {
    const curSearch = this.search().toLowerCase();

    console.log(`In filteredItems. Search: ${curSearch}, ${this.includeDungeons()}, ${this.includeRaids()} `);

    const searchArr: Raid_Dungeon[] = [
      ...(this.includeRaids() ? raids : []),
      ...(this.includeDungeons() ? dungeons : [])
    ];

    // if we match a raid or dungeon, display as a collapsed view. If we match a dungeon, display the dungeon as
    // an expanded child of it's raid or dungeon
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
