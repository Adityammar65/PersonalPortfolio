import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/projects";

import {
  ProjectHero,
  ProjectOverview,
  ProjectFeatures,
  ProjectTechStack,
  ProjectArchitecture,
  ProjectLinks,
} from "../components";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-32 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative">
        <ProjectHero project={project} />

        <ProjectOverview project={project} />

        <ProjectFeatures features={project.features} />

        <ProjectTechStack tech={project.tech} />

        <ProjectArchitecture architecture={project.architecture} />

        <ProjectLinks project={project} />
      </div>
    </main>
  );
}
