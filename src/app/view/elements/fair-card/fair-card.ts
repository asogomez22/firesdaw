import { Component, inject, input, computed } from '@angular/core';
import { FairService } from '../../../services/fair.service';
import { Fair } from '../../../model/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.html',
  styleUrl: './fair-card.css'
})
export class FairCard {
  private fairService = inject(FairService);
  readonly fair = input.required<Fair>();
  readonly isFavorite = computed(() => this.fairService.isFavorite(this.fair().activityId));

  toggle(): void {
    this.fairService.toggleFavorite(this.fair().activityId);
  }
}
