import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports:[CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  template: `
    <!-- shared/navbar/navbar.component.html -->
<nav class="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
  <!-- Logo -->
  <div class="text-2xl font-bold text-indigo-600">AssetTrack</div>

  <!-- Navigation Links -->
  <div class="flex items-center space-x-8">
    <a
      routerLink="/dashboard"
      routerLinkActive="border-b-2 border-indigo-600 pb-1 text-indigo-600"
      class="text-gray-800 font-medium hover:text-indigo-600 transition"
      [routerLinkActiveOptions]="{ exact: true }"
      >Dashboard</a
    >
    <a
      routerLink="/assets"
      routerLinkActive="border-b-2 border-indigo-600 pb-1 text-indigo-600"
      class="text-gray-800 font-medium hover:text-indigo-600 transition"
      >Assets</a
    >
  </div>

  <!-- Right Section -->
  <div class="flex items-center space-x-4">
    <button
      (click)="openAddModal()"
      class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
    >
      Add Asset
    </button>

    <!-- User Avatar -->
    <div
      class="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-200 text-indigo-800 font-bold"
    >
      JD
    </div>
  </div>
  
</nav>
`,
})
export class NavbarComponent {
openAddModal() {
throw new Error('Method not implemented.');
}
  
  showModal = false;

  openAddAssetModal() {
    this.showModal = true;
  }

  closeAddAssetModal() {
    this.showModal = false;

}
}
