export default function DesignToolsSection({ dict }: any) {
  return (
    <ul className="flex gap-4 items-center col-span-12 md:col-span-6 rounded-2xl bg-card p-10 text-cardtext">
      <li className="text-xl font-bold border-r pr-4">
        {dict.sections.designTools}
      </li>
      {[
        { label: "Ai", bg: "#360300", text: "#da9f4c" },
        { label: "Ps", bg: "#0b172a", text: "#74aaf2" },
        { label: "Id", bg: "#59051e", text: "#d84b6f" },
        { label: "Xd", bg: "#480d30", text: "#de6ff0" },
      ].map((tool) => (
        <li
          key={tool.label}
          className={`flex items-center rounded-lg font-bold text-xl px-4 py-2`}
          style={{ backgroundColor: tool.bg, color: tool.text }}
        >
          {tool.label}
        </li>
      ))}
    </ul>
  );
}
