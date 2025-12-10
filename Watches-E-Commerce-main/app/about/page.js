import Image from 'next/image';

export default function About() {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: '/team-1.jpg',
      bio: '25 years of experience in luxury watchmaking'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Design',
      image: '/team-3.jpg',
      bio: 'Award-winning watch designer with international recognition'
    },
    {
      name: 'Michael Chen',
      role: 'Master Watchmaker',
      image: '/team-2.jpg',
      bio: 'Certified Swiss watchmaker with 15 years of experience'
    },
    {
      name: 'Emma Davis',
      role: 'Customer Experience Director',
      image: '/team-4.jpg',
      bio: 'Dedicated to providing exceptional service to our clients'
    }
  ];

  const values = [
    {
      title: 'Craftsmanship',
      description: 'Every timepiece is crafted with meticulous attention to detail and precision.'
    },
    {
      title: 'Innovation',
      description: 'We combine traditional watchmaking with modern technology and design.'
    },
    {
      title: 'Quality',
      description: 'Only the finest materials and movements are used in our watches.'
    },
    {
      title: 'Service',
      description: 'We provide lifetime support and service for all our timepieces.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About TimePiece</h1>
          <p className="mt-4 text-gray-300">Crafting excellence since 1999</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
              <div className="space-y-4 text-black">
                <p>
                  Founded in 1999, TimePiece has been at the forefront of luxury watchmaking for over two decades. What started as a small workshop in Switzerland has grown into a globally recognized brand, known for its exceptional quality and innovative designs.
                </p>
                <p>
                  Our journey began with a simple mission: to create timepieces that combine traditional craftsmanship with modern aesthetics. Today, we continue to push the boundaries of watchmaking while maintaining the highest standards of quality and precision.
                </p>
                <p>
                  Each TimePiece watch is a testament to our commitment to excellence, crafted by master watchmakers who share our passion for perfection.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury watches display"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-4 text-black">{value.title}</h3>
                <p className="text-black">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                  <Image 
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                <p className="text-black mb-2">{member.role}</p>
                <p className="text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 