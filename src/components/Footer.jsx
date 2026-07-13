import { Link } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-14 md:py-20">
      <div className="flex flex-col items-center gap-4 px-6">
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-80}
          className="
            flex
            items-center
            gap-2

            cursor-pointer

            text-blue-400/50
            hover:text-blue-400
            hover:scale-105

            transition-all
            duration-300

            text-sm
            sm:text-base
          "
        >
          Back to Top
          <FaArrowCircleUp className="text-lg sm:text-xl" />
        </Link>

        <span className="text-slate-500 text-sm sm:text-base text-center">
          Made with React & Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
