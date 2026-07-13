import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "certificate",
    "contact",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="hidden md:flex justify-center">
          <ul className="flex items-center gap-8 lg:gap-16 text-white/70 font-medium">
            {menus.map((menu) => (
              <li key={menu}>
                <Link
                  to={menu}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="capitalize cursor-pointer hover:text-white transition"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden justify-between items-center">
          <h1 className="text-white font-semibold text-xl">Personal Portfolio</h1>

          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 text-white/70 font-medium pb-4">
            {menus.map((menu) => (
              <li key={menu}>
                <Link
                  to={menu}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="capitalize cursor-pointer hover:text-white transition"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
