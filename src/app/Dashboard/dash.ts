import { Component } from '@angular/core';
import { NavbarComponent } from "../Navbar/nav";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <app-navbar />

    <div class="p-6">
      <h1 class="text-xl font-semibold mb-6">Dashboard</h1>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

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
            <p class="text-lg font-bold">R{{ totalValue.toLocaleString() }}</p>
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

      </div>
    </div>
  `,
})
export class DashboardComponent {
  totalAssets = 12;
  totalValue = 20000;
  totalCategories = 5;
}
