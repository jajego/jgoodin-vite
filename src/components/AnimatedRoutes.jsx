import React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
