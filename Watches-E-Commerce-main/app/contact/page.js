'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const storeLocations = [
    {
      city: 'Phagwara, Punjab',
      address: 'Sarai Road, Naiyan Chowk',
      phone: '+91 84272-29890',
      hours: 'Mon-Sat: 10:00 AM - 7:00 PM'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-300">We&apos;re here to help with any questions about our timepieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 text-black p-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Store Locations */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black">Our Boutique</h2>
            <div className="space-y-8">
              {storeLocations.map((location, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-2 text-black">{location.city}</h3>
                  <div className="space-y-2 text-black">
                    <p>{location.address}</p>
                    <p>{location.phone}</p>
                    <p>{location.hours}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Contact Info */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-black">Customer Service</h2>
              <div className="space-y-4 text-black">
                <p>
                  For immediate assistance, please call our customer service line:
                  <br />
                  <span className="font-semibold">+91 84272-29890</span>
                </p>
                <p>
                  Email us at:
                  <br />
                  <span className="font-semibold">support@timepiece.com</span>
                </p>
                <p>
                  Hours of Operation:
                  <br />
                  Monday - Friday: 9:00 AM - 8:00 PM EST
                  <br />
                  Saturday: 10:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-black">Find Us</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.9481784784384!2d75.7671159114889!3d31.221780674245082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af5adbfe403d7%3A0xee868639e3a1ef0b!2sModern%20watch!5e1!3m2!1sen!2sin!4v1741621008811!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 