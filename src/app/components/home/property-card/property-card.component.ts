import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Property } from '../../../models/property.model';

// NG-Zorro modules
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    NzRateModule,
    NzIconModule
  ],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  @Input() property!: Property;
  
  currentImageIndex: number = 0;

  formatCurrency(price: number, currency: string): string {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND',
      maximumFractionDigits: 0 
    }).format(price);
  }

  showPrevImage(): void {
    if (!this.property.images?.length) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.property.images.length) % this.property.images.length;
  }

  showNextImage(): void {
    if (!this.property.images?.length) return;
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.property.images.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}
