export default function EducationSection({ dict }: any) {
  const items = [
    dict.sections.education.highSchool,
    dict.sections.education.diploma,
    dict.sections.education.graduation,
  ];

  return (
    <section className="flex flex-col gap-4 items-center col-span-12 md:col-span-6 md:row-span-3 rounded-2xl bg-card p-10">
      {items.map((edu: any, i: number) => (
        <article key={i} className="flex items-center justify-between w-full border-b border-b-grey pb-8 last:border-b-0 last:pb-0">
          <span className="flex flex-col">
            <h2 className="text-cardtext text-3xl font-bold">{edu.title}</h2>
            <p className="text-grey text-lg">{edu.field}</p>
            <p className="text-grey text-sm">{edu.location}</p>
          </span>
          <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
            {edu.period}
          </span>
        </article>
      ))}
    </section>
  );
}
