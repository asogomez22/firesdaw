import { Injectable, signal } from '@angular/core';
import fairsData from '../../fairs.json';
import { Fair, RegionGroup } from '../model/fairs';

@Injectable({ providedIn: 'root' })
export class FairService {
  private readonly STORAGE_KEY = 'favoriteFairs';

  readonly allFairs: Fair[] = fairsData as Fair[];
  readonly favoriteIds = signal<string[]>(this.loadFavorites());

  get regions(): RegionGroup[] {
    const map = new Map<string, Fair[]>();
    for (const fair of this.allFairs) {
      const key = fair.regionId;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(fair);
    }
    const groups: RegionGroup[] = [];
    for (const [regionId, fairs] of map) {
      groups.push({ regionName: fairs[0].regionName, regionId, fairs });
    }
    return groups.sort((a, b) => a.regionName.localeCompare(b.regionName));
  }

  getFairsByRegion(regionId: string): Fair[] {
    return this.allFairs.filter(f => f.regionId === regionId);
  }

  toggleFavorite(activityId: string): void {
    const ids = this.favoriteIds();
    const idx = ids.indexOf(activityId);
    if (idx === -1) ids.push(activityId);
    else ids.splice(idx, 1);
    this.favoriteIds.set([...ids]);
    this.saveFavorites(ids);
  }

  isFavorite(activityId: string): boolean {
    return this.favoriteIds().includes(activityId);
  }

  get favorites(): Fair[] {
    const ids = this.favoriteIds();
    return this.allFairs.filter(f => ids.includes(f.activityId));
  }

  private loadFavorites(): string[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveFavorites(ids: string[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
  }
}
