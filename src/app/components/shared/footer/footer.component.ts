import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  supportLinks = [
    { name: 'Trung tâm trợ giúp', url: '#' },
    { name: 'AirCover', url: '#' },
    { name: 'Chống phân biệt đối xử', url: '#' },
    { name: 'Hỗ trợ người khuyết tật', url: '#' },
    { name: 'Các tùy chọn hủy', url: '#' }
  ];
  
  hostLinks = [
    { name: 'Cho thuê nhà trên DiEO BnB', url: '#' },
    { name: 'AirCover cho Chủ nhà', url: '#' },
    { name: 'Tài nguyên về đón tiếp khách', url: '#' },
    { name: 'Diễn đàn cộng đồng', url: '#' }
  ];
  
  companyLinks = [
    { name: 'Trang tin tức', url: '#' },
    { name: 'Tính năng mới', url: '#' },
    { name: 'Cơ hội nghề nghiệp', url: '#' },
    { name: 'Nhà đầu tư', url: '#' }
  ];
}
