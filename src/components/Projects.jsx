import { projects } from "../data/projects";
import AnimatedSection from "./AnimatedSection";
import { ProjectCard } from ".";

export default function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="py-16 md:py-20 lg:py-24 px-5 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            A selection of projects showcasing my skills in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 md:mt-16 gap-5">
          <p className="text-slate-400 text-center max-w-xl">
            Want to see more of my work? Visit my GitHub to explore all of my
            projects.
          </p>

          <a
            href="https://github.com/Adityammar65?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              rounded-xl
              border border-blue-500
              text-blue-400
              hover:bg-blue-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
