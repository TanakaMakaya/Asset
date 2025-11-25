import { Component } from '@angular/core';
import { NavbarComponent } from '../Navbar/nav';
import { NgFor, NgStyle } from '@angular/common';

type ChartItem = {
  name: string;
  count: number;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, NgFor,
    NgStyle,],
  template: `
    <app-navbar />

    <!-- Layout wrapper -->
    <div class="min-h-screen bg-gray-50 flex">

      <!-- Main content -->
      <main class="flex-1 p-6 space-y-8">
        <header class="flex items-center justify-between">
          <h1 class="text-4xl font-semibold">Dashboard</h1>

          
        </header>

        <!-- Stats Grid -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Total Assets -->
          <div class="bg-white rounded-xl p-5 shadow flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-500 rounded-lg"></div>
            <div>
              <p class="text-sm text-gray-500">Total Assets</p>
              <p class="text-lg font-bold">{{ totalAssets }}</p>
            </div>
          </div>

          <!-- Total Value -->
          <div class="bg-white rounded-xl p-5 shadow flex items-center gap-4">
            <div class="w-12 h-12 bg-green-500 rounded-lg"></div>
            <div>
              <p class="text-sm text-gray-500">Total Value</p>
              <p class="text-lg font-bold">
                R{{ totalValue.toLocaleString() }}
              </p>
            </div>
          </div>

          <!-- Total Categories -->
          <div class="bg-white rounded-xl p-5 shadow flex items-center gap-4">
            <div class="w-12 h-12 bg-purple-500 rounded-lg"></div>
            <div>
              <p class="text-sm text-gray-500">Categories</p>
              <p class="text-lg font-bold">{{ totalCategories }}</p>
            </div>
          </div>

        </section>

        <!-- “Charts” section -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Assets by Category -->
          <div class="bg-white rounded-xl p-5 shadow">
            <h2 class="text-sm font-semibold mb-4">Assets by Category</h2>

            <div class="space-y-3">
              <div *ngFor="let item of assetsByCategory" class="space-y-1">
                <div class="flex justify-between text-xs text-gray-600">
                  <span>{{ item.name }}</span>
                  <span>{{ item.count }}</span>
                </div>
                <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-purple-500 rounded-full"
                    [ngStyle]="{ width: getCategoryWidth(item) }">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Assets by Location -->
          <div class="bg-white rounded-xl p-5 shadow">
            <h2 class="text-sm font-semibold mb-4">Assets by Location</h2>

            <div class="space-y-3">
              <div *ngFor="let item of assetsByLocation" class="space-y-1">
                <div class="flex justify-between text-xs text-gray-600">
                  <span>{{ item.name }}</span>
                  <span>{{ item.count }}</span>
                </div>
                <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-blue-500 rounded-full"
                    [ngStyle]="{ width: getLocationWidth(item) }">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  `,
})
export class DashboardComponent {
  // top summary
  totalAssets = 12;
  totalValue = 20000;
  totalCategories = 3;

  // mock “chart” data
  assetsByCategory: ChartItem[] = [
    { name: 'Electronics', count: 6 },
    { name: 'Furniture', count: 3 },
    { name: 'Vehicles', count: 3 },
  ];

  assetsByLocation: ChartItem[] = [
    { name: 'Office', count: 5 },
    { name: 'Remote', count: 4 },
    { name: 'Warehouse', count: 3 },
  ];

  // helpers to turn a count into a % bar width
  private maxCategoryCount = Math.max(...this.assetsByCategory.map(i => i.count));
  private maxLocationCount = Math.max(...this.assetsByLocation.map(i => i.count));

  getCategoryWidth(item: ChartItem): string {
    return (item.count / this.maxCategoryCount) * 100 + '%';
  }

  getLocationWidth(item: ChartItem): string {
    return (item.count / this.maxLocationCount) * 100 + '%';
  }
}
