import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyService } from '../../../services/property.service';
import { Property } from '../../../models/property.model';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PropertyCardComponent } from '../property-card/property-card.component';

// NG-Zorro modules
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

interface Category {
  key: string;
  name: string;
  iconUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    PropertyCardComponent,
    NzTabsModule,
    NzIconModule,
    NzButtonModule,
    NzSkeletonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('categoriesContainer') categoriesContainer?: ElementRef;
  
  properties: Property[] = [];
  loading = true;
  
  categories: Category[] = [
    { 
      key: 'cabin', 
      name: 'Cabin', 
      iconUrl: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' 
    },
    { 
      key: 'beach', 
      name: 'Bãi biển', 
      iconUrl: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg' 
    },
    { 
      key: 'view', 
      name: 'View đẹp', 
      iconUrl: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' 
    },
    { 
      key: 'nature', 
      name: 'Thiên nhiên', 
      iconUrl: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg' 
    },
    { 
      key: 'tropical', 
      name: 'Nhiệt đới', 
      iconUrl: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg'
    },
    { 
      key: 'trending', 
      name: 'Thịnh hành', 
      iconUrl: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' 
    },
    { 
      key: 'luxury', 
      name: 'Sang trọng', 
      iconUrl: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg' 
    },
    { 
      key: 'design', 
      name: 'Thiết kế', 
      iconUrl: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' 
    },
    { 
      key: 'countryside', 
      name: 'Nông thôn', 
      iconUrl: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' 
    },
    { 
      key: 'lakefront', 
      name: 'Ven hồ', 
      iconUrl: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' 
    },
    { 
      key: 'mountain', 
      name: 'Núi non', 
      iconUrl: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg' 
    },
    { 
      key: 'tiny', 
      name: 'Nhỏ gọn', 
      iconUrl: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg' 
    },
    { 
      key: 'amazing-pools', 
      name: 'Hồ bơi', 
      iconUrl: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg' 
    },
    { 
      key: 'skiing', 
      name: 'Trượt tuyết', 
      iconUrl: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg' 
    },
    { 
      key: 'private-rooms', 
      name: 'Phòng riêng', 
      iconUrl: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' 
    },
    { 
      key: 'private-rooms', 
      name: 'Phòng riêng', 
      iconUrl: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' 
    },
    { 
      key: 'private-rooms', 
      name: 'Phòng riêng', 
      iconUrl: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg' 
    }
  ];
  
  selectedCategory = 'beach';

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  ngAfterViewInit(): void {
    console.log('Categories container:', this.categoriesContainer);
  }

  loadProperties(): void {
    this.loading = true;
    this.propertyService.getProperties().subscribe({
      next: (data) => {
        this.properties = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading properties:', error);
        this.loading = false;
      }
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    // In a real application, you would filter properties based on category
  }

  scrollCategories(direction: 'left' | 'right'): void {
    console.log('Scroll direction:', direction);
    
    if (!this.categoriesContainer) {
      console.error('Categories container element not found');
      return;
    }
    
    const container = this.categoriesContainer.nativeElement;
    const scrollAmount = 300; // Adjust this value as needed
    const currentScroll = container.scrollLeft;
    
    if (direction === 'left') {
      container.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
    
    console.log('Scrolled to:', container.scrollLeft);
  }
}
