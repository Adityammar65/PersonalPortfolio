export default function SkillItem({ icon: Icon, name, color }) {
  return (
    <li className="group flex items-center gap-4 py-2">
      {Icon ? (
        <Icon
          className={`
            text-3xl
            ${color}
            transition-all
            duration-300
            group-hover:scale-110
          `}
        />
      ) : (
        <span className="w-8 h-8 rounded-full bg-blue-600/50 flex items-center justify-center text-xs font-bold">
          {">"}
        </span>
      )}

      <span className="text-white text-lg font-medium">{name}</span>
    </li>
  );
}
