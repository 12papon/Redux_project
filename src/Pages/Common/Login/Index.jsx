import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        {/* হেডার */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">লগইন করুন</h2>
          <p className="text-gray-500 mt-2">
            আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন
          </p>
        </div>

        <form className="space-y-6">
          {/* ইমেইল ফিল্ড */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ইমেইল ঠিকানা
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* পাসওয়ার্ড ফিল্ড */}
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                পাসওয়ার্ড
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* লগইন বাটন */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md"
          >
            লগইন
          </button>
        </form>

        {/* নিচের অংশ */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            নতুন ইউজার?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
