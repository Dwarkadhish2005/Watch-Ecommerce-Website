export default function Warranty() {
  const warrantyDetails = [
    {
      title: 'Coverage Period',
      content: 'All TimePiece watches come with a 5-year international warranty from the date of purchase, covering manufacturing defects and mechanical failures.'
    },
    {
      title: 'What\'s Covered',
      content: 'Our warranty covers internal movement components, mechanical failures, and manufacturing defects that affect the proper functioning of your timepiece.'
    },
    {
      title: 'What\'s Not Covered',
      content: 'The warranty does not cover normal wear and tear, damage from accidents, misuse, unauthorized repairs, water damage (unless specified as water-resistant), or cosmetic issues such as scratches on the case or crystal.'
    },
    {
      title: 'Warranty Validation',
      content: 'To validate your warranty, you must register your watch on our website and retain the original purchase receipt and warranty certificate provided with your timepiece.'
    }
  ];

  const serviceTypes = [
    {
      title: 'Regular Maintenance',
      period: 'Every 3-5 years',
      description: 'Complete service including movement cleaning, lubrication, timing adjustment, and water-resistance testing.',
      price: 'Starting from $250'
    },
    {
      title: 'Battery Replacement',
      period: 'As needed',
      description: 'Professional battery replacement service with water-resistance testing.',
      price: 'Starting from $75'
    },
    {
      title: 'Crystal Replacement',
      period: 'As needed',
      description: 'Replacement of scratched or damaged watch crystals with genuine parts.',
      price: 'Starting from $150'
    },
    {
      title: 'Strap/Bracelet Service',
      period: 'As needed',
      description: 'Replacement or adjustment of straps and bracelets.',
      price: 'Starting from $50'
    }
  ];

  const serviceCenters = [
    {
      city: 'New York',
      address: '123 Fifth Avenue',
      phone: '+1 (212) 555-0123',
      services: 'Full Service Center'
    },
    {
      city: 'Los Angeles',
      address: '456 Rodeo Drive',
      phone: '+1 (310) 555-0456',
      services: 'Full Service Center'
    },
    {
      city: 'Chicago',
      address: '789 Michigan Avenue',
      phone: '+1 (312) 555-0789',
      services: 'Full Service Center'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Warranty & Service</h1>
          <p className="mt-4 text-gray-300">Learn about our warranty coverage and service options</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Warranty Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Warranty Information</h2>
          <div className="space-y-8">
            {warrantyDetails.map((detail, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-bold mb-2 text-black">{detail.title}</h3>
                <p className="text-black">{detail.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Service Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                <div className="space-y-2 text-black">
                  <p>
                    <span className="font-medium">Recommended:</span> {service.period}
                  </p>
                  <p>{service.description}</p>
                  <p className="font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Centers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Authorized Service Centers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCenters.map((center, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-black">{center.city}</h3>
                <div className="space-y-2 text-black">
                  <p>{center.address}</p>
                  <p>{center.phone}</p>
                  <p className="font-medium">{center.services}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Service Process</h2>
          <div className="space-y-6">
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-bold mb-1 text-black">Contact Us</h4>
                  <p className="text-black">Reach out to our service department to discuss your watch&apos;s needs</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-bold mb-1 text-black">Evaluation</h4>
                  <p className="text-black">Our experts will examine your timepiece and provide a detailed service quote</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-bold mb-1 text-black">Service</h4>
                  <p className="text-black">Upon approval, our master watchmakers will service your timepiece</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                  4
                </span>
                <div>
                  <h4 className="font-bold mb-1 text-black">Quality Control</h4>
                  <p className="text-black">Rigorous testing ensures your watch meets our high standards</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Need Service or Support?</h2>
            <p className="text-black mb-4">
              Contact our service department for assistance with warranty claims or to schedule a service appointment.
            </p>
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-medium">Email:</span> service@timepiece.com
              </p>
              <p className="text-black">
                <span className="font-medium">Phone:</span> +1 (800) 555-0000
              </p>
              <p className="text-black">
                <span className="font-medium">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 