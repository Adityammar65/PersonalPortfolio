import AnimatedSection from "./AnimatedSection";
import { SkillCard } from ".";

import { skills } from "../data/skills";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Technical Skills
        </h1>

        <p className="text-slate-400 text-center mt-4 mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-7">
          Specialized technologies, frameworks, and tools I use to build modern,
          scalable, and responsive web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
