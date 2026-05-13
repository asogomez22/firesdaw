import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FairService } from '../../../services/fair.service';
import { FairCard } from '../fair-card/fair-card';

@Component({
  selector: 'app-favorites',
  imports: [FairCard, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  private fairService = inject(FairService);
  favorites = this.fairService.favorites;
  favoriteIds = this.fairService.favoriteIds;
}
