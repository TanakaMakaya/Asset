import { Injectable } from "@angular/core";

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
  searchTerm = '';
  selectedCategory = '';
  selectedLocation = '';

  assets: Asset[] = [
    { id: 1, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Good', value: 12000 },
    { id: 2, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Poor', value: 12000 },
    { id: 3, name: 'MacBook 2020', category: 'Electronics', location: 'Office', condition: 'Good', value: 13000 },
  ];

  filteredAssets = [...this.assets];

  filterAssets() {
    this.filteredAssets = this.assets.filter(asset => {
      const matchesSearch =
        asset.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        asset.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        asset.location.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = !this.selectedCategory || asset.category === this.selectedCategory;
      const matchesLocation = !this.selectedLocation || asset.location === this.selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }

  addAsset(asset: any) {
    const newId = Math.max(...this.assets.map(a => a.id)) + 1;
    this.assets.push({ ...asset, id: newId });
    this.filterAssets();
  }

  updateAsset(updated: Asset) {
    this.assets = this.assets.map(a => (a.id === updated.id ? updated : a));
    this.filterAssets();
  }

  deleteAsset(id: number) {
    this.assets = this.assets.filter(a => a.id !== id);
    this.filterAssets();
  }

  getConditionClass(condition: string): string {
    const classes = {
      Good: 'bg-green-500 text-white',
      Fair: 'bg-yellow-500 text-white',
      Poor: 'bg-red-500 text-white'
    };
    return classes[condition as keyof typeof classes] || '';
  }
}
