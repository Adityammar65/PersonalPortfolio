import AnimatedSection from "./AnimatedSection";
import { SkillCard } from ".";

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-white text-4xl font-bold text-center">
          Technical Skills
        </h1>

        <p className="text-slate-400 text-center mt-4 mb-16 max-w-2xl mx-auto">
          Specialized technologies, frameworks, and tools I use to build modern,
          scalable, and responsive web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}