export default function Experience({ dict }: any) {
  const experiences = [
    dict.sections.experience.freelance,
    dict.sections.experience.meetzed,
  ];

  return (
    <>
      {experiences.map((exp: any, index: number) => (
        <article key={index} className="col-span-12 md:col-span-6 rounded-2xl bg-card p-10">
          <section className="flex items-center justify-between border-b border-b-grey pb-10">
            <header className="flex flex-col">
              <h3 className="text-2xl font-bold text-cardtext">{exp.title}</h3>
              <p className="text-grey text-sm">{exp.role}</p>
            </header>
            <span className="bg-[color:var(--foreground)]/10 rounded-lg text-cardtext text-sm p-4">
              {exp.period}
            </span>
          </section>
          <ul className="list-disc list-inside text-cardtext text-sm mt-6">
            {exp.bullets.map((b: string) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}
