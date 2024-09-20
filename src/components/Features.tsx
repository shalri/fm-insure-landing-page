import { features } from "@/libs/data";
import Image from "next/image";

export default function Features() {
  return (
    <article className="pb-[9rem]">
      <div className="mx-auto mb-10 mt-[8.75rem] h-[1px] w-[9rem] bg-ip-dark-violet" />
      <h2 className="px-4 text-center text-[3rem] leading-[1.02] -tracking-[0.6]">
        We&rsquo;re different
      </h2>
      <div className="mt-20 flex flex-col gap-y-[3.7rem] px-6">
        {features.map((feature) => (
          <section
            className="flex flex-col items-center justify-center"
            key={feature.heading}
          >
            <div className="relative size-[5.35rem]">
              <Image
                src={feature.icon}
                alt={feature.heading}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-8 text-center text-[1.68rem]">
              {feature.heading}
            </h3>
            <p className="mt-4 px-2 text-center text-ip-dark-grayish-violet">
              {feature.description}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
