export default function ShippingInfo() {
  const shippingMethods = [
    {
      name: 'Standard Shipping',
      time: '3-5 business days',
      cost: 'Free on orders over $500',
      details: 'Available for all domestic orders within the United States'
    },
    {
      name: 'Express Shipping',
      time: '1-2 business days',
      cost: '$25',
      details: 'Available for all domestic orders within the United States'
    },
    {
      name: 'International Shipping',
      time: '5-7 business days',
      cost: 'Calculated at checkout',
      details: 'Available for most countries worldwide'
    },
    {
      name: 'Same Day Delivery',
      time: 'Same business day',
      cost: '$50',
      details: 'Available in select cities for orders placed before 2 PM local time'
    }
  ];

  const policies = [
    {
      title: 'Order Processing',
      content: 'All orders are processed within 24 hours during business days. You will receive a confirmation email with tracking information once your order ships.'
    },
    {
      title: 'Shipping Restrictions',
      content: 'We currently do not ship to P.O. boxes or APO/FPO addresses. Some restrictions may apply for international shipping due to customs regulations.'
    },
    {
      title: 'Package Protection',
      content: 'All shipments are fully insured and require signature confirmation upon delivery to ensure the safety of your valuable timepiece.'
    },
    {
      title: 'International Duties & Taxes',
      content: 'International orders may be subject to import duties and taxes, which are the responsibility of the recipient. These charges vary by country and are not included in the purchase price.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Shipping Information</h1>
          <p className="mt-4 text-gray-300">Learn about our shipping methods and policies</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Shipping Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingMethods.map((method, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-black">{method.name}</h3>
                <div className="space-y-2 text-black">
                  <p>
                    <span className="font-medium">Delivery Time:</span> {method.time}
                  </p>
                  <p>
                    <span className="font-medium">Cost:</span> {method.cost}
                  </p>
                  <p>{method.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Policies */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-black">Shipping Policies</h2>
          <div className="space-y-8">
            {policies.map((policy, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-bold mb-2 text-black">{policy.title}</h3>
                <p className="text-black">{policy.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Need More Information?</h2>
            <p className="text-black mb-4">
              If you have any questions about shipping or need to track your order, please don&apos;t hesitate to contact our customer service team.
            </p>
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-medium">Email:</span> shipping@timepiece.com
              </p>
              <p className="text-black">
                <span className="font-medium">Phone:</span> +1 (800) 555-0000
              </p>
              <p className="text-black">
                <span className="font-medium">Hours:</span> Monday - Friday, 9:00 AM - 8:00 PM EST
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 