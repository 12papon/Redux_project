import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError(); // এরর ডিটেইলস পাওয়ার জন্য
  console.error(error); // ডেভেলপার হিসেবে কনসোলে দেখার জন্য

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">ওহ্ না! কিছু একটা ভুল হয়েছে।</h1>
      <p className="text-lg text-gray-600 mb-6">
        <i>{error.statusText || error.message}</i> {/* এররের ধরন দেখাবে */}
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default ErrorPage;
