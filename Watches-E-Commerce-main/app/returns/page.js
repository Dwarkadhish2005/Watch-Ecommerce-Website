export default function Returns() {
  const returnSteps = [
    {
      step: 1,
      title: 'Request a Return',
      description: 'Contact our customer service team within 30 days of receiving your order to initiate the return process. You can reach us by email or phone.'
    },
    {
      step: 2,
      title: 'Receive Return Authorization',
      description: 'Once your return request is approved, you will receive a Return Authorization (RA) number and detailed return shipping instructions.'
    },
    {
      step: 3,
      title: 'Package Your Return',
      description: 'Carefully pack the item in its original packaging, including all accessories, documentation, and the RA number clearly marked on the outside of the package.'
    },
    {
      step: 4,
      title: 'Ship Your Return',
      description: 'Ship the package using the provided return shipping label. We recommend using a tracked shipping service for security purposes.'
    }
  ];

  const returnPolicies = [
    {
      title: 'Return Window',
      content: 'Items must be returned within 30 days of delivery. Items must be unworn, unaltered, and in their original packaging with all tags attached.'
    },
    {
      title: 'Condition Requirements',
      content: 'All returned items must be in their original, unworn condition with no signs of wear, damage, or alterations. All original packaging, certificates, and documentation must be included.'
    },
    {
      title: 'Non-Returnable Items',
      content: 'Custom-ordered watches, engraved items, and special orders cannot be returned unless they arrive damaged or defective.'
    },
    {
      title: 'Refund Process',
      content: 'Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be issued to the original payment method used for the purchase.'
    }
  ];

  const commonQuestions = [
    {
      question: 'How long do I have to return my purchase?',
      answer: 'You have 30 days from the date of delivery to initiate a return. After this period, returns cannot be accepted.'
    },
    {
      question: 'Do I have to pay for return shipping?',
      answer: 'For standard returns, customers are responsible for return shipping costs. For defective items or shipping errors, we will provide a prepaid return label.'
    },
    {
      question: 'How long does it take to process my refund?',
      answer: 'Once we receive your return, it typically takes 5-7 business days to process the refund. The time it takes for the refund to appear in your account may vary depending on your payment provider.'
    },
    {
      question: 'Can I exchange my item instead of returning it?',
      answer: 'Yes, we offer exchanges for different sizes or models. Please contact our customer service team to arrange an exchange.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Returns & Exchanges</h1>
          <p className="mt-4 text-gray-300">Learn about our return policy and process</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Return Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {returnSteps.map((step) => (
              <div key={step.step} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-3">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-black">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Return Policies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Return Policies</h2>
          <div className="space-y-8">
            {returnPolicies.map((policy, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-bold mb-2 text-black">{policy.title}</h3>
                <p className="text-black">{policy.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-black">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {commonQuestions.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-bold mb-2 text-black">{item.question}</h3>
                <p className="text-black">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Need Help with a Return?</h2>
            <p className="text-black mb-4">
              Our customer service team is here to assist you with any questions about returns or exchanges.
            </p>
            <div className="space-y-2">
              <p className="text-black">
                <span className="font-medium">Email:</span> returns@timepiece.com
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