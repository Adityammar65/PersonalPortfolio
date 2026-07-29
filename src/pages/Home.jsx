import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Certificate,
  Contact,
} from "../components";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.scrollTo;

    if (!section) return;

    const timer = setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 600,
        offset: -80,
      });

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificate />
      <Contact />
    </>
  );
}
