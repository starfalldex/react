import React from 'react'

function Trial() {
  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
          <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

          <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Desk and Office
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
            </div>
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Self-Improvement
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
            </div>
            <div class="group relative">
              <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
              <h3 class="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trial