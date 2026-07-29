import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowCircleUp, FaArrowLeft } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  return (
    <footer className="py-10 md:py-20">
      <div className="flex flex-col items-center gap-4 px-6">
        {isHome ? (
          <Link
            to="home"
            smooth
            duration={600}
            offset={-80}
            className="
              z-10
              flex items-center gap-2
              cursor-pointer
              text-blue-400/50
              hover:text-blue-400
              hover:scale-105
              transition-all duration-300
              text-sm sm:text-base
            "
          >
            Back to Top
            <FaArrowCircleUp className="text-lg sm:text-xl" />
          </Link>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="
              flex items-center gap-2
              cursor-pointer
              text-blue-400/50
              hover:text-blue-400
              hover:scale-105
              transition-all duration-300
              text-sm sm:text-base
            "
          >
            <FaArrowLeft className="text-lg sm:text-xl" />
            Back
          </button>
        )}

        <span className="text-center text-sm text-slate-500 sm:text-base">
          Made with React & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
