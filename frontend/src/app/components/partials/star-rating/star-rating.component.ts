import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'] // Corrected here
})
export class StarRatingComponent {
  @Input() stars!: number;
  @Input() size: number = 1;

  styles() {
    return {
      width: this.size + 'rem', // Corrected syntax
      height: this.size + 'rem', // Corrected syntax
      marginRight: this.size / 6 + 'rem', // Corrected syntax
    };
  }

  getStarImage(current: number): string {
    const previousHalf = current - 0.5;
    const imageName =
      this.stars >= current ? 'star-full' :
      this.stars >= previousHalf ? 'star-half' :
      'star-empty';
    
    return `/assets/stars/${imageName}.svg`; // Adjusted path
  }
}
