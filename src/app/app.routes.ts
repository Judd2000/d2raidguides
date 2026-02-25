import { Routes } from '@angular/router';
import { RaidEncSearch } from './components/raid-enc-search/raid-enc-search';
import { UsedAssets } from './components/used-assets/used-assets.component';

export const routes: Routes = [
  {
    path: '',
    component: RaidEncSearch
  },
  {
    path: 'acknowledgements',
    component: UsedAssets
  }
];

