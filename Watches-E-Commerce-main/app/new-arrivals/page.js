'use client';

import { useCart } from '../context/CartContext';

export default function NewArrivals() {
  const { addToCart } = useCart();

  // Sample new arrivals data
  const newArrivals = [
    {
      id: 1,
      name: 'Limited Edition Gold Series',
      price: 2499.99,
      description: 'Exclusive 18k gold-plated chronograph with diamond indices',
      image: '/watches/limited-gold.jpg',
      releaseDate: '2024-03-01'
    },
    {
      id: 2,
      name: 'Smart Chronograph Pro',
      price: 899.99,
      description: 'Advanced smartwatch features with classic chronograph design',
      image: '/watches/smart-chrono.jpg',
      releaseDate: '2024-02-15'
    },
    {
      id: 3,
      name: 'Ocean Master Diver',
      price: 1299.99,
      description: 'Professional diving watch with 500m water resistance',
      image: '/watches/ocean-master.jpg',
      releaseDate: '2024-02-01'
    },
    {
      id: 4,
      name: 'Minimalist Titanium',
      price: 699.99,
      description: 'Ultra-light titanium case with sapphire crystal',
      image: '/watches/titanium.jpg',
      releaseDate: '2024-01-20'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">New Arrivals</h1>
          <p className="mt-4 text-gray-300">Discover our latest timepieces</p>
        </div>
      </div>

      {/* New Arrivals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {newArrivals.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200" />
                {/* Add Image component when images are available */}
                <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  New
                </div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-black">{product.name}</h3>
                    <p className="mt-1 text-black">${product.price}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
                <p className="mt-4 text-black">{product.description}</p>
                <p className="mt-2 text-sm text-black">
                  Released: {new Date(product.releaseDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-order Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">Coming Soon</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to know about our upcoming releases. Sign up for notifications and get exclusive pre-order access.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 