import { cta } from "@/libs/data";
import Button from "./Button";

export default function HowWeWork() {
  return (
    <section className="relative mb-[12rem] overflow-hidden px-6 text-ip-very-light-gray sm:mx-auto sm:max-w-[1156px]">
      <div className="absolute right-6 size-[316px] bg-[url(/images/bg-pattern-how-we-work-mobile.svg)] bg-right bg-no-repeat sm:h-[250px] sm:w-[435px] sm:bg-[url(/images/bg-pattern-how-we-work-desktop.svg)]" />
      <div className="flex flex-col items-center bg-ip-dark-violet px-6 py-[4.4rem] sm:flex-row sm:justify-between sm:gap-x-4 sm:px-20">
        <h2
          className="line-clamp-2 text-center text-[2.44rem] leading-[1.02] text-ip-very-light-gray sm:max-w-[480px] sm:text-left sm:text-[3.344rem] sm:leading-[1.03] sm:tracking-[0.01em]"
          style={{ fontSize: "clamp(2.44rem, 3.715vw, 3.344rem)" }}
        >
          {cta.copy}
        </h2>
        <Button
          label={cta.buttonCopy}
          className="mt-10 text-nowrap px-[1.4rem] text-ip-very-light-gray sm:mt-0 sm:shrink-0 sm:py-[0.55rem]"
        />
      </div>
    </section>
  );
}
