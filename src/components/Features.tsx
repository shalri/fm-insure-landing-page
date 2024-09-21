import { features } from "@/libs/data";
import Image from "next/image";

export default function Features() {
  return (
    <article className="pb-[9rem] sm:mx-auto sm:max-w-[1154px] sm:pb-[9.8rem]">
      <hr className="mx-auto mb-10 mt-[8.75rem] h-[1px] w-[9rem] bg-ip-dark-violet sm:mb-14 sm:ml-6 sm:mt-[19rem] sm:h-[2px]" />
      <h2 className="px-4 text-center text-[3rem] leading-[1.02] -tracking-[0.6] sm:px-6 sm:text-left sm:text-[4.6rem] sm:-tracking-[0.027em]">
        We&rsquo;re different
      </h2>
      <div className="mt-20 flex flex-col gap-y-[3.7rem] px-6 sm:mt-[5.75rem] sm:grid sm:grid-cols-3 sm:items-start sm:gap-x-[1.875rem] sm:gap-y-0">
        {features.map((feature) => (
          <section
            className="flex flex-col items-center justify-center sm:items-start"
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
            <h3 className="mt-8 text-center text-[1.68rem] sm:text-left">
              {feature.heading}
            </h3>
            <p className="mt-4 px-2 text-center text-ip-dark-grayish-violet sm:mt-[0.9rem] sm:px-0 sm:text-left sm:leading-relaxed">
              {feature.description}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
