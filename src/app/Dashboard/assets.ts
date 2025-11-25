import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "../Navbar/nav";
import { AssetsService } from "./assets.service";

@Component({
  selector: "app-assets",
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  template: `
    <app-navbar/>
    
    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <h1 class="text-4xl font-bold text-gray-900 mb-8">My Assets</h1>
        
        <!-- Filter Section -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Search Input -->
            <div class="md:col-span-1">
              <input
                type="text"
                [(ngModel)]="assetsService.searchTerm"
                (input)="assetsService.filterAssets()"
                placeholder="Search assets"
                class="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-600 placeholder-gray-400"
              />
            </div>
            
            <!-- Category Filter -->
            <div class="md:col-span-1">
              <div class="relative">
                <label class="block text-sm font-semibold text-gray-900 mb-2">Category</label>
                <select
                  [(ngModel)]="assetsService.selectedCategory"
                  (change)="assetsService.filterAssets()"
                  class="w-full px-4 py-2 text-gray-600 border-none bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">All categories</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Vehicles">Vehicles</option>
                </select>
              </div>
            </div>
            
            <!-- Location Filter -->
            <div class="md:col-span-1">
              <div class="relative">
                <label class="block text-sm font-semibold text-gray-900 mb-2">Location</label>
                <select
                  [(ngModel)]="assetsService.selectedLocation"
                  (change)="assetsService.filterAssets()"
                  class="w-full px-4 py-2 text-gray-600 border-none bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">All locations</option>
                  <option value="Office">Office</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Home">Home</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Assets Table -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <!-- Table Header -->
          <div class="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase">
            <div class="col-span-2">Asset</div>
            <div class="col-span-2">Category</div>
            <div class="col-span-2">Location</div>
            <div class="col-span-2">Condition</div>
            <div class="col-span-2">Value</div>
            <div class="col-span-2">Actions</div>
          </div>
          
          <!-- Table Rows -->
          @for (asset of assetsService.filteredAssets; track asset.id) {
            <div class="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center">
              <div class="col-span-2 font-semibold text-gray-900">{{ asset.name }}</div>
              <div class="col-span-2 text-gray-700">{{ asset.category }}</div>
              <div class="col-span-2 text-gray-700">{{ asset.location }}</div>
              <div class="col-span-2">
                <span 
                  [class]="assetsService.getConditionClass(asset.condition)"
                  class="inline-block px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ asset.condition }}
                </span>
              </div>
              <div class="col-span-2 font-semibold text-gray-900">R{{ asset.value.toLocaleString() }}</div>
              <div class="col-span-2 flex gap-4">
                <button 
                  (click)="assetsService.editAsset(asset)"
                  class="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Edit
                </button>
                <button 
                  (click)="assetsService.deleteAsset(asset.id)"
                  class="text-red-600 hover:text-red-800 font-medium transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          } @empty {
            <div class="px-6 py-12 text-center text-gray-500">
              No assets found
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class assetsComponent {
  constructor(public assetsService: AssetsService) {}
}
