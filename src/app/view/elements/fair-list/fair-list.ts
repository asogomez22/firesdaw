import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FairService } from '../../../services/fair.service';
import { FairCard } from '../fair-card/fair-card';

@Component({
  selector: 'app-fair-list',
  imports: [FairCard, RouterLink],
  templateUrl: './fair-list.html',
  styleUrl: './fair-list.css'
})
export class FairList {
  private route = inject(ActivatedRoute);
  private fairService = inject(FairService);

  regionName = '';
  fairs = this.fairService.allFairs;

  constructor() {
    const regionId = this.route.snapshot.paramMap.get('regionId')!;
    const region = this.fairService.regions.find(r => r.regionId === regionId);
    this.regionName = region?.regionName ?? '';
    this.fairs = this.fairService.getFairsByRegion(regionId);
  }
}
