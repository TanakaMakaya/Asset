import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "../Navbar/nav";
import { AssetsService, Asset } from "./assets.service";

@Component({
  selector: "app-assets",
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  template: `
    <app-navbar/>

    <div class="min-h-screen bg-gray-50 p-8">
      <div class="max-w-7xl mx-auto">
        
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-4xl font-bold text-gray-900">My Assets</h1>

          <button
            (click)="openAddModal()"
            class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            + Add Asset
          </button>
        </div>

        <!-- Filter Section -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- Search Input -->
            <div>
              <input
                type="text"
                [(ngModel)]="assetsService.searchTerm"
                (input)="assetsService.filterAssets()"
                placeholder="Search assets"
                class="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <!-- Category Filter -->
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Category</label>
              <select
                [(ngModel)]="assetsService.selectedCategory"
                (change)="assetsService.filterAssets()"
                class="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none"
              >
                <option value="">All categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Vehicles">Vehicles</option>
              </select>
            </div>

            <!-- Location Filter -->
            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">Location</label>
              <select
                [(ngModel)]="assetsService.selectedLocation"
                (change)="assetsService.filterAssets()"
                class="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-purple-500 focus:outline-none"
              >
                <option value="">All locations</option>
                <option value="Office">Office</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Home">Home</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Assets Table -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          
          <!-- Table Header -->
          <div class="grid grid-cols-12 px-6 py-4 bg-gray-50 border-b text-sm font-semibold text-gray-500 uppercase">
            <div class="col-span-2">Asset</div>
            <div class="col-span-2">Category</div>
            <div class="col-span-2">Location</div>
            <div class="col-span-2">Condition</div>
            <div class="col-span-2">Value</div>
            <div class="col-span-2">Actions</div>
          </div>

          <!-- Table Rows -->
          @for (asset of assetsService.filteredAssets; track asset.id) {
            <div class="grid grid-cols-12 px-6 py-4 border-b hover:bg-gray-50 transition">
              
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
                  (click)="openEditModal(asset)"
                  class="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>

                <button
                  (click)="assetsService.deleteAsset(asset.id)"
                  class="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>

            </div>
          }

          @empty {
            <div class="p-10 text-center text-gray-400">No assets found</div>
          }

        </div>

        <!-- MODAL -->
        <div
          *ngIf="modalOpen"
          class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4"
        >
          <div class="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">

            <h2 class="text-2xl font-semibold mb-4">
              {{ editing ? 'Edit Asset' : 'Add Asset' }}
            </h2>

            <!-- FORM -->
            <div class="space-y-4">
              <input
                type="text"
                placeholder="Asset Name"
                [(ngModel)]="form.name"
                class="w-full px-4 py-2 border rounded-lg"
              />

              <select [(ngModel)]="form.category" class="w-full px-4 py-2 border rounded-lg">
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Vehicles">Vehicles</option>
              </select>

              <select [(ngModel)]="form.location" class="w-full px-4 py-2 border rounded-lg">
                <option value="">Select Location</option>
                <option value="Office">Office</option>
                <option value="Warehouse">Warehouse</option>
                <option value="Home">Home</option>
              </select>

              <select [(ngModel)]="form.condition" class="w-full px-4 py-2 border rounded-lg">
                <option value="">Select Condition</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>

              <input
                type="number"
                placeholder="Value"
                [(ngModel)]="form.value"
                class="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <!-- Buttons -->
            <div class="flex justify-end gap-4 mt-6">
              <button
                class="px-4 py-2 rounded-lg bg-gray-200"
                (click)="closeModal()"
              >
                Cancel
              </button>

              <button
                class="px-4 py-2 rounded-lg bg-purple-600 text-white"
                (click)="saveAsset()"
              >
                {{ editing ? 'Update' : 'Add' }}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  `
})
export class assetsComponent {
  modalOpen = false;
  editing = false;

  // form model
  form: any = {
    id: null,
    name: "",
    category: "",
    location: "",
    condition: "",
    value: null,
  };

  constructor(public assetsService: AssetsService) {}

  openAddModal() {
    this.editing = false;
    this.form = { id: null, name: "", category: "", location: "", condition: "", value: null };
    this.modalOpen = true;
  }

  openEditModal(asset: Asset) {
    this.editing = true;
    this.form = { ...asset };
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  saveAsset() {
    if (this.editing) {
      this.assetsService.updateAsset(this.form);
    } else {
      this.assetsService.addAsset(this.form);
    }
    this.assetsService.filterAssets();
    this.closeModal();
  }
}
