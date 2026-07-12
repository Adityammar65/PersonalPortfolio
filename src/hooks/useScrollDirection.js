import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 5) return;

      setDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateDirection);

    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  return direction;
}
