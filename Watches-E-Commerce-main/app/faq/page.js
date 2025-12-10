'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'products', name: 'Products' },
    { id: 'orders', name: 'Orders & Shipping' },
    { id: 'returns', name: 'Returns & Warranty' },
    { id: 'care', name: 'Watch Care' }
  ];

  const faqs = {
    general: [
      {
        question: 'What makes TimePiece watches unique?',
        answer: 'TimePiece watches combine traditional Swiss craftsmanship with modern design and technology. Each timepiece is meticulously crafted using the finest materials and undergoes rigorous quality control.'
      },
      {
        question: 'Are your watches authentic?',
        answer: 'Yes, all our watches are 100% authentic and come with official documentation, warranty cards, and certificates of authenticity.'
      },
      {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location.'
      },
      {
        question: 'How can I contact customer service?',
        answer: 'You can reach our customer service team by email at support@timepiece.com, by phone at +1 (800) 555-0000, or through our contact form.'
      }
    ],
    products: [
      {
        question: 'What movement types do you offer?',
        answer: 'We offer both mechanical (automatic and manual) and quartz movements. Each product page specifies the movement type used in that particular model.'
      },
      {
        question: 'Are your watches water-resistant?',
        answer: 'Water resistance varies by model. Each watch\'s specifications clearly state its water resistance rating, ranging from splash-resistant to professional diving capabilities.'
      },
      {
        question: 'Can I customize my watch?',
        answer: 'Yes, we offer customization options for select models, including strap materials, dial colors, and engraving services.'
      },
      {
        question: 'What materials are used in your watches?',
        answer: 'We use high-quality materials including surgical-grade stainless steel, sapphire crystal, genuine leather, and in select models, precious metals and diamonds.'
      }
    ],
    orders: [
      {
        question: 'How long does shipping take?',
        answer: 'Domestic orders typically arrive within 3-5 business days. International shipping can take 5-7 business days, depending on the destination.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes, we offer free standard shipping on all domestic orders over $500. International shipping costs vary by location.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you\'ll receive a confirmation email with tracking information. You can also track your order through your account dashboard.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers. For luxury timepieces, we also offer financing options.'
      }
    ],
    returns: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for unworn watches in their original condition with all tags and documentation. Custom orders are non-returnable.'
      },
      {
        question: 'How long is the warranty period?',
        answer: 'All our watches come with a 5-year international warranty covering manufacturing defects and mechanical failures.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'Contact our customer service team to initiate a return. They will provide you with a return authorization number and shipping instructions.'
      },
      {
        question: 'What happens if my watch needs repair under warranty?',
        answer: 'Contact our service department to arrange for warranty service. We\'ll evaluate your timepiece and repair or replace it according to our warranty terms.'
      }
    ],
    care: [
      {
        question: 'How often should I service my watch?',
        answer: 'We recommend servicing mechanical watches every 3-5 years to maintain optimal performance. Quartz watches typically require battery replacement every 2-3 years.'
      },
      {
        question: 'How should I clean my watch?',
        answer: 'Use a soft, lint-free cloth to clean the case and crystal. For metal bracelets, you can use mild soap and water. Leather straps should be kept dry and clean.'
      },
      {
        question: 'How should I store my watch?',
        answer: 'Store your watch in a cool, dry place away from direct sunlight. For mechanical watches, consider using a watch winder when not wearing them.'
      },
      {
        question: 'What should I do if my watch gets wet?',
        answer: 'If your watch is not water-resistant or gets exposed to salt water, wipe it dry immediately and have it checked by a professional as soon as possible.'
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-gray-300">Find answers to common questions about our products and services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqs[activeCategory].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h3 className="text-xl font-bold mb-4 text-black">{faq.question}</h3>
              <p className="text-black">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Still Need Help?</h2>
            <p className="text-black mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our customer service team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-2 text-black">Email Us</h3>
                <p className="text-black">support@timepiece.com</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-black">Call Us</h3>
                <p className="text-black">+1 (800) 555-0000</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-black">Live Chat</h3>
                <p className="text-black">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 