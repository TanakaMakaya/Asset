import { Component } from "@angular/core";


@Component({
  selector: "app-register",
  template: `
    <div class="flex items-center justify-center min-h-screen bg-indigo-600">
  <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h2>
    <p class="text-center text-gray-600 mb-6">Start tracking your assets today</p>

    <form>
      <div class="mb-4">
        <label class="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          placeholder="James"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

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

      <div class="mb-6">
        <label class="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          placeholder="********"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Create Account
      </button>
    </form>

    <p class="text-center text-gray-600 mt-6">
      Already have an account?
      <a href="/login" class="text-indigo-600 font-semibold hover:underline">Sign in</a>
    </p>
  </div>
</div>


  `,
  imports: []
})
export class RegisterComponent {}
