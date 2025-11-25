import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "applogin",
  template: `
  
 <div class="flex items-center justify-center min-h-screen bg-indigo-600">
  <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-bold text-center text-indigo-600 mb-2">AssetTrack</h2>
    <p class="text-center text-gray-600 mb-6">Sign in to manage your assets</p>

    <form>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          placeholder="Your@email.com"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          placeholder="********"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div class="flex items-center justify-between mb-6 text-sm">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2 accent-indigo-600" />
          Remember me
        </label>
        <a href="#" class="text-indigo-600 hover:underline">Forgot password</a>
      </div>

      <button
        type="submit"
        
        class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition" 
        routerLink="app-dash"
        
      >
        Sign in
      </button>
    </form>

    <p class="text-center text-gray-600 mt-6">
      Don’t have an account?
      <a href="/register" class="text-indigo-600 font-semibold hover:underline">Sign up</a>
    </p>
    <router-outlet/>
  </div>
</div>
  `,
  imports: [RouterLink, RouterOutlet]
})

export class LoginComponent {}