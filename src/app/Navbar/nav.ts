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
      (click)="openAddAssetModal()"
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

<!-- Add Asset Modal -->
<div
  *ngIf="showModal"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
>
  <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
    <h2 class="text-xl font-bold mb-4">Add New Asset</h2>
    <form>
      <label class="block text-gray-700 mb-1">Asset Name</label>
      <input
        type="text"
        class="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <label class="block text-gray-700 mb-1">Value (R)</label>
      <input
        type="number"
        class="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div class="flex justify-end space-x-3 mt-4">
        <button
          type="button"
          (click)="closeAddAssetModal()"
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</div>

  `,
})
export class NavbarComponent {
  
  showModal = false;

  openAddAssetModal() {
    this.showModal = true;
  }

  closeAddAssetModal() {
    this.showModal = false;

}
}
