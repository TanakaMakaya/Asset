import { Injectable } from '@angular/core';

export interface Asset {
  id: number;
  name: string;
  category: string;
  location: string;
  condition: 'Good' | 'Fair' | 'Poor';
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  searchTerm: string = '';
  selectedCategory: string = '';
  selectedLocation: string = '';
  
  assets: Asset[] = [
    { id: 1, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Good', value: 12000 },
    { id: 2, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Poor', value: 12000 },
    { id: 3, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Good', value: 13000 },
  ];
  
  filteredAssets: Asset[] = [...this.assets];
  
  filterAssets(): void {
    this.filteredAssets = this.assets.filter(asset => {
      const matchesSearch = asset.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           asset.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           asset.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || asset.category === this.selectedCategory;
      const matchesLocation = !this.selectedLocation || asset.location === this.selectedLocation;
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }
  
  getConditionClass(condition: string): string {
    const classes = {
      'Good': 'bg-green-500 text-white',
      'Fair': 'bg-yellow-500 text-white',
      'Poor': 'bg-red-500 text-white'
    };
    return classes[condition as keyof typeof classes] || '';
  }
  
  editAsset(asset: Asset): void {
    console.log('Editing asset:', asset);
    // Implement your edit logic here
  }
  
  deleteAsset(id: number): void {
    console.log('Deleting asset:', id);
    this.assets = this.assets.filter(a => a.id !== id);
    this.filterAssets();
  }
}
