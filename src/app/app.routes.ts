import { Routes } from '@angular/router';
import { RaidEncSearch } from './components/raid-enc-search/raid-enc-search';
import { UsedAssets } from './components/used-assets/used-assets.component';
import { RaidDungeonView } from './components/raid-dungeon-view/raid-dungeon-view';
import { EncounterView } from './components/encounter-view/encounter-view';

export const routes: Routes = [
  {
    path: '',
    component: RaidEncSearch
  },
  {
    path: 'acknowledgements',
    component: UsedAssets
  },
  {
    path: 'rd/:path/:encPath',
    component: EncounterView
  },
  {
    path: 'rd/:path',
    component: RaidDungeonView
  }
];

