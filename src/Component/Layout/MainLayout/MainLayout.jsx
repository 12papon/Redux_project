import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20"
      >
        <Outlet />
      </motion.div>
    </div>
  )
};

export default MainLayout;
