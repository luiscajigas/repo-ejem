import Image from "next/image";

export default function AvatarSection({ dict }: any) {
  return (
    <span className="flex items-center justify-center col-span-12 md:col-span-3 md:row-span-2 bg-white rounded-2xl overflow-hidden relative">
      <Image src="/avatar.jpg" alt="avatar" width={600} height={600} className="w-full h-auto md:w-[300px]" />
      <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2 md:hidden">
        {dict.sections.details.items.slice(0, 3).map((item: any, idx: number) => (
          <span key={idx} className="px-3 py-1 rounded-lg bg-card text-cardtext text-xs shadow-sm">
            {item.text}
          </span>
        ))}
      </div>
    </span>
  );
}
