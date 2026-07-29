import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-700
        bg-slate-800/40
        backdrop-blur-md

        p-5
        sm:p-6

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
      "
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-white">
        {project.title}
      </h3>

      <p className="mt-4 text-slate-400 leading-7 text-sm sm:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              px-3
              py-1
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-300
              text-xs
              sm:text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between

          gap-4
          mt-8
        "
      >
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              text-slate-300
              hover:text-blue-400
              transition
            "
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        ) : (
          <span />
        )}

        <Link
          to={`/projects/${project.slug}`}
          className="
            text-blue-400
            hover:text-blue-300
            transition
            font-medium
          "
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
