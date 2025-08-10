// components/OnekoCat.js
"use client";
import { useEffect } from "react";

export default function OnekoCat() {
  useEffect(() => {
    import("../../public/oneko").then((mod) => {
      mod.default(); // Call the function that starts the cat
    });
  }, []);

  return null;
}
