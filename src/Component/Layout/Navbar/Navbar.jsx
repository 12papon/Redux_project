import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Mail, Briefcase, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // মেনু আইটেম লিস্ট
  const menuItems = [
    { name: "Home", icon: <Home size={20} />, href: "#" },
    { name: "About", icon: <User size={20} />, href: "#" },
    { name: "Portfolio", icon: <Briefcase size={20} />, href: "#" },
    { name: "Contact", icon: <Mail size={20} />, href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-blue-600"
          >
            MyLogo
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1, color: "#2563eb" }}
                className="flex items-center space-x-1 text-gray-600 font-medium"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="text-lg font-medium">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
