import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import AvatarSection from "@/components/sections/AvatarSections";
import IntroSection from "@/components/sections/Intro";
import InterestsSection from "@/components/sections/Interests";
import ExperienceSection from "@/components/sections/Experience";
import DesignToolsSection from "@/components/sections/DesignTools";
import EducationSection from "@/components/sections/Education";
import EditingToolsSection from "@/components/sections/EditingTools";
import LanguagesSection from "@/components/sections/Languages";
import Portfolio from "@/components/sections/Portfolio";
import Details from "@/components/sections/Details";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        <AvatarSection dict={dict} />
        <IntroSection dict={dict} />
        <InterestsSection dict={dict} />
        <ExperienceSection dict={dict} />
        <DesignToolsSection dict={dict} />
        <EducationSection dict={dict} />
        <EditingToolsSection dict={dict} />
        <LanguagesSection dict={dict} />
        <Portfolio dict={dict} />
        <Details dict={dict} />
      </main>
    </div>
  );
}
