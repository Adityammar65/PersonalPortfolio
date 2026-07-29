export default function ProjectOverview({ project }) {
  return (
    <section className="py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">Overview</h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            A brief introduction to the project, including its purpose,
            objectives, and the technologies used during development.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-lg leading-9 text-zinc-300">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
}
