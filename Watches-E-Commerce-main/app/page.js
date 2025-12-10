import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: 1,
      name: 'Classic Chronograph',
      price: 599.99,
      image: '/chronograph.jpg',
      category: 'Chronograph'
    },
    {
      id: 2,
      name: 'Diver Pro',
      price: 799.99,
      image: '/diver-pro.jpg',
      category: 'Diving'
    },
    {
      id: 3,
      name: 'Minimalist Series',
      price: 299.99,
      image: '/minimalist.jpg',
      category: 'Casual'
    },
    {
      id: 4,
      name: 'Luxury Gold',
      price: 1299.99,
      image: '/luxury-gold.jpg',
      category: 'Luxury'
    }
  ];

  // Sample categories
  const categories = [
    {
      name: 'Luxury Collection',
      description: 'Premium timepieces for the distinguished collector',
      image: '/categories/luxury.jpg'
    },
    {
      name: 'Sport Series',
      description: 'Durable watches for the active lifestyle',
      image: '/categories/sport.jpg'
    },
    {
      name: 'Classic Edition',
      description: 'Timeless designs that never go out of style',
      image: '/categories/classic.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover z-10" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[8px] z-10" />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Timeless Elegance
              </h1>
              <p className="text-xl text-white mb-8">
                Discover our collection of luxury timepieces that combine style, precision, and craftsmanship.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center bg-white text-black px-5 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Featured Timepieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-black">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-sm">{product.category}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="relative group cursor-pointer">
                  <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    {/* Background images for each category */}
                    {index === 0 && (
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
                    )}
                    {index === 1 && (
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
                    )}
                    {index === 2 && (
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover" />
                    )}
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] group-hover:backdrop-blur-[2px] transition-all duration-300" />
                    <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:scale-110">{category.name}</h3>
                        <p className="text-gray-200 px-6 transform transition-transform duration-300 group-hover:scale-105">{category.description}</p>
                        <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-full p-2 inline-flex items-center justify-center group-hover:bg-white/30 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about new products, special offers, and exclusive discounts.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
