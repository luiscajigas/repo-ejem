export default function LanguagesSection({ dict }: any) {
  return (
    <ul className="flex gap-4 items-center col-span-12 md:col-span-6 rounded-2xl bg-card p-10 text-cardtext">
      <li className="text-xl font-bold border-r pr-4">
        {dict.sections.languages}
      </li>
      <li className="text-4xl">co</li>
      <li className="text-4xl">🇺🇸</li>
      <li className="text-4xl">ARG</li>
    </ul>
  );
}
