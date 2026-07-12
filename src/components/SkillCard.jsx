import { SkillItem } from "."

export default function SkillCard({ title, items }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-700
        bg-slate-800/40
        backdrop-blur-md
        p-8

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-[0_0_40px_rgba(59,130,246,.15)]
      "
    >
      <h2 className="text-2xl font-semibold text-blue-400 mb-6">{title}</h2>

      <ul className="space-y-2">
        {items.map((item) => (
          <SkillItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
}
