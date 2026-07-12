import { projects } from "../data/projects";
import AnimatedSection from "./AnimatedSection";
import { ProjectCard } from ".";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-30 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white font-bold">Featured Projects</h2>

          <p className="mt-4 text-slate-400">
            A selection of projects showcasing my skills in web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex flex-col items-center mt-16 gap-4">
          <p className="text-slate-400 text-center">
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
