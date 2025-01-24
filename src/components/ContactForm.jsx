import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here (e.g., sending the data to a server)
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Contact Me</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-white w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-white w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-medium">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="bg-white w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="w-full py-3 bg-purple-800 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
