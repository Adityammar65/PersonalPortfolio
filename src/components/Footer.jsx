import { Link } from "react-scroll";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center py-20 gap-4">
      <Link
        to="home"
        smooth={true}
        duration={600}
        offset={-80}
        className="cursor-pointer hover:text-blue-400 hover:scale-105 transition text-blue-400/50 flex gap-2 items-center"
      >
        Back to Top
        <FaArrowCircleUp />
      </Link>
      <span className="text-blue-400/50">Made with React</span>
    </div>
  );
}
