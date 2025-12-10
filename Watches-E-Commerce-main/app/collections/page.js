'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Classic Chronograph',
      price: 599.99,
      category: 'Chronograph',
      image: '/watches/chronograph.jpg',
      isNew: true
    },
    {
      id: 2,
      name: 'Diver Pro',
      price: 799.99,
      category: 'Diving',
      image: '/watches/diver.jpg',
      isNew: false
    },
    {
      id: 3,
      name: 'Minimalist Series',
      price: 299.99,
      category: 'Casual',
      image: '/watches/minimalist.jpg',
      isNew: false
    },
    {
      id: 4,
      name: 'Luxury Gold',
      price: 1299.99,
      category: 'Luxury',
      image: '/watches/luxury.jpg',
      isNew: true
    },
    // Add more products as needed
  ];

  // Filter products based on selected category and price range
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    let priceMatch = true;

    if (priceRange === '0-500') {
      priceMatch = product.price < 500;
    } else if (priceRange === '500-1000') {
      priceMatch = product.price >= 500 && product.price <= 1000;
    } else if (priceRange === '1000+') {
      priceMatch = product.price > 1000;
    }

    return categoryMatch && priceMatch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return a.isNew ? -1 : 1;
    return 0; // featured
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Our Collections</h1>
          <p className="mt-4 text-gray-300">Discover our range of luxury timepieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
                <div className="space-y-2">
                  {['all', 'Chronograph', 'Diving', 'Casual', 'Luxury'].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="ml-2 text-gray-600 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: '0-500', label: 'Under $500' },
                    { value: '500-1000', label: '$500 - $1000' },
                    { value: '1000+', label: 'Over $1000' }
                  ].map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="h-4 w-4 text-black border-gray-300 focus:ring-black"
                      />
                      <span className="ml-2 text-gray-600">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex justify-end mb-8">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-gray-300 rounded-md text-gray-600 text-sm focus:ring-black focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                      {/* Image with zoom effect on hover */}
                      <div className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 group-hover:scale-110" 
                           style={{backgroundImage: `url(${product.image})`}} />
                    </div>
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                        New
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <p className="text-white text-sm">{product.category}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                    <p className="text-black">${product.price}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => {
                          handleAddToCart(product);
                          // You could add navigation to checkout here
                          window.location.href = '/checkout';
                        }}
                        className="bg-white text-black border border-black py-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 