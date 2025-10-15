export default function Interests({ dict }: any) {
  return (
    <ul className="flex items-center col-span-12 md:col-span-9 gap-4 p-5 rounded-2xl bg-card text-cardtext">
      <li className="text-xl font-bold border-r pr-4">
        {dict.sections.interests.title}
      </li>
      {dict.sections.interests.items.map((item: string) => (
        <li
          key={item}
          className="flex items-center rounded-lg text-cardtext text-sm px-4 py-2 bg-[color:var(--foreground)]/10"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
