import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FairService } from '../../../services/fair.service';

@Component({
  selector: 'app-region-list',
  imports: [RouterLink],
  templateUrl: './region-list.html',
  styleUrl: './region-list.css'
})
export class RegionList {
  private fairService = inject(FairService);
  regions = this.fairService.regions;
}
