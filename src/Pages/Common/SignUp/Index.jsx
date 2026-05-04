import React, { useState } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {/* হেডার */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">নতুন অ্যাকাউন্ট</h2>
          <p className="text-gray-500 mt-2">
            আপনার তথ্য দিয়ে সাইনআপ সম্পন্ন করুন
          </p>
        </div>

        <form className="space-y-5">
          {/* নাম ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পুরো নাম
            </label>
            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* ইমেইল ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* পাসওয়ার্ড ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* কনফার্ম পাসওয়ার্ড ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              কনফার্ম পাসওয়ার্ড
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* সাইনআপ বাটন */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md"
          >
            সাইনআপ করুন
          </button>
        </form>

        {/* নিচের অংশ */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
