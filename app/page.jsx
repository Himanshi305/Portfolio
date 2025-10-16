"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./componenets/SplashScreen";
import MainContent from "./componenets/MainContent";

export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isSplashVisible ? (
          <SplashScreen
            key="splash"
            onAnimationComplete={() => setIsSplashVisible(false)}
          />
        ) : (
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}
