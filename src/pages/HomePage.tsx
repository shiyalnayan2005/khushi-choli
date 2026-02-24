import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Discover Your Perfect{" "}
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Khushi Choli
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Handcrafted with love, designed for the modern woman who appreciates
          tradition
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Shop Now
          </button>
          <button className="px-8 py-3 border-2 border-pink-500 text-pink-600 dark:text-pink-400 rounded-full font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300">
            View Collections
          </button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Bridal Collection", items: 24 },
            { name: "Party Wear", items: 36 },
            { name: "Daily Wear", items: 48 },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 bg-linear-to-r from-pink-200 to-purple-200 dark:from-pink-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-pink-200">{category.items} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
