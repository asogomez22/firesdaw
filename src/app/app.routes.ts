import { Routes } from '@angular/router';
import { RegionList } from './view/elements/region-list/region-list';
import { FairList } from './view/elements/fair-list/fair-list';
import { Favorites } from './view/elements/favorites/favorites';

export const routes: Routes = [
  { path: '', component: RegionList },
  { path: 'region/:regionId', component: FairList },
  { path: 'favorites', component: Favorites },
];
