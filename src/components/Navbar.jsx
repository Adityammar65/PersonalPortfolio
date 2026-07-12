import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 bg-slate-900/75">
      <div className="flex justify-center">
        <ul className="flex items-center gap-16 text-white/70 font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="certificate"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Certificate
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-white transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
