import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: '1',
      title: 'Biệt thự sang trọng bên bờ biển',
      location: 'Đà Nẵng, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60',
      ],
      price: 1200000,
      currency: 'VND',
      rating: 4.92,
      distance: '15 km',
      dates: '20-25 Th06',
      host: 'Chủ nhà siêu cấp',
      type: 'Biệt thự',
      isMostPopular: true,
      isLiked: true,
      amenities: ['Hồ bơi', 'Wi-Fi', 'Bếp', 'Máy giặt']
    },
    {
      id: '2',
      title: 'Căn hộ hiện đại trong thành phố',
      location: 'Tp.HCM, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60'
      ],
      price: 850000,
      currency: 'VND',
      rating: 4.85,
      distance: '5 km',
      dates: '1-7 Th07',
      host: 'Người thuê đáng tin cậy',
      type: 'Căn hộ',
      isMostPopular: true,
      isLiked: true,
      amenities: ['Wi-Fi', 'Bếp', 'Máy lạnh', 'TV']
    },
    {
      id: '3',
      title: 'Nhà gỗ yên tĩnh giữa rừng thông',
      location: 'Đà Lạt, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&auto=format&fit=crop&q=60'
      ],
      price: 950000,
      currency: 'VND',
      rating: 4.97, 
      distance: '8 km',
      dates: '10-15 Th07',
      host: 'Chủ nhà siêu cấp',
      type: 'Nhà gỗ',
      isMostPopular: true,
      isLiked: true,
      amenities: ['Bếp', 'Lò sưởi', 'Wi-Fi', 'Chỗ đậu xe']
    },
    {
      id: '4',
      title: 'Căn hộ view biển tuyệt đẹp',
      location: 'Nha Trang, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60'
      ],
      price: 1050000,
      currency: 'VND',
      rating: 4.8,
      distance: '2 km',
      dates: '5-10 Th08',
      host: 'Người thuê chuyên nghiệp',
      type: 'Căn hộ',
      isMostPopular: true,
      isLiked: true,
      amenities: ['Hồ bơi', 'Wi-Fi', 'Bếp', 'Máy lạnh']
    },
    {
      id: '5',
      title: 'Nhà truyền thống Việt Nam',
      location: 'Hội An, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&auto=format&fit=crop&q=60'
      ],
      price: 750000,
      currency: 'VND',
      rating: 4.95,
      distance: '1 km',
      dates: '15-20 Th08',
      host: 'Chủ nhà thân thiện',
      type: 'Nhà truyền thống',
      isMostPopular: true,
      isLiked: true,
      amenities: ['Wi-Fi', 'Bếp', 'Sân vườn', 'Xe đạp miễn phí']
    },
    {
      id: '6',
      title: 'Phòng riêng trong biệt thự cổ',
      location: 'Huế, Việt Nam',
      images: [
        'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?w=500&auto=format&fit=crop&q=60',
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=60'
      ],
      price: 650000,
      currency: 'VND',
      rating: 4.88,
      distance: '3 km',
      dates: '1-5 Th09',
      host: 'Chủ nhà tận tâm',
      type: 'Phòng riêng',
      isMostPopular: false,
      isLiked: false,
      amenities: ['Wi-Fi', 'Máy lạnh', 'Bồn tắm', 'Bữa sáng']
    }
  ];

  constructor() { }

  getProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: string): Observable<Property | undefined> {
    const property = this.properties.find(p => p.id === id);
    return of(property);
  }
} 