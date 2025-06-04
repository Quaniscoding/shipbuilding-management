import React from "react";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="relative h-[220px] md:h-[320px] flex items-center justify-center bg-black/60">
      <img
        src="/images/about-us-1.png"
        alt="shipyard"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Về chúng <span className="text-blue-500">tôi</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-2 text-white/80"
        >
          <a href="/"> Trang chủ / </a>
          <span className="text-blue-400">Giới thiệu</span>
        </motion.div>
      </div>
    </div>
  );
}
