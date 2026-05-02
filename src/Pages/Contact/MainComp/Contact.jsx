import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            যোগাযোগ করুন
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            আপনার যেকোনো প্রশ্ন বা মতামতের জন্য আমাদের মেসেজ দিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Information */}
          <div className="bg-blue-600 p-10 text-white">
            <h3 className="text-2xl font-semibold mb-6">আমাদের ঠিকানা</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-xl">📍</span>
                <p>মিরপুর-১০, ঢাকা, বাংলাদেশ</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">📞</span>
                <p>+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-xl">✉️</span>
                <p>info@example.com</p>
              </div>
            </div>

            {/* Social Icons Placeholder */}
            <div className="mt-12 flex space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 cursor-pointer transition">
                FB
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 cursor-pointer transition">
                LN
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ইমেইল ঠিকানা
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  মেসেজ
                </label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="আপনার কথাগুলো এখানে লিখুন..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 active:scale-95 transition-all"
              >
                মেসেজ পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
