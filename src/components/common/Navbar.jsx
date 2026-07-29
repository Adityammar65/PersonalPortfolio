import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const menus = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "certificate",
    "contact",
  ];

  const handleNavigate = (section) => {
    setOpen(false);

    if (isHome) return;

    navigate("/", {
      state: {
        scrollTo: section,
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8 lg:gap-16 text-white/70 font-medium">
            {menus.map((menu) => (
              <li key={menu}>
                {isHome ? (
                  <ScrollLink
                    to={menu}
                    smooth
                    duration={600}
                    offset={-80}
                    className="capitalize cursor-pointer hover:text-white transition"
                  >
                    {menu}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavigate(menu)}
                    className="capitalize cursor-pointer hover:text-white transition"
                  >
                    {menu}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden justify-between items-center">
          <h1 className="text-white font-semibold text-xl">
            Personal Portfolio
          </h1>

          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col items-center gap-5 pb-4 text-white/70 font-medium">
              {menus.map((menu) => (
                <li key={menu}>
                  {isHome ? (
                    <ScrollLink
                      to={menu}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setOpen(false)}
                      className="capitalize cursor-pointer hover:text-white transition"
                    >
                      {menu}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleNavigate(menu)}
                      className="capitalize cursor-pointer hover:text-white transition"
                    >
                      {menu}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
