export default function Intro({ dict }: any) {
  return (
    <p className="p-5 text-2xl text-cardtext col-span-12 md:col-span-9 rounded-2xl bg-card">
      {dict.intro}
    </p>
  );
}
