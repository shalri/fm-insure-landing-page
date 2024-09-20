import { cta } from "@/libs/data";
import Button from "./Button";

export default function HowWeWork() {
  return (
    <section className="relative mb-[12rem] overflow-hidden px-6 text-ip-very-light-gray">
      <div className="absolute right-6 size-[316px] bg-[url(/images/bg-pattern-how-we-work-mobile.svg)] bg-right bg-no-repeat" />
      <div className="flex flex-col items-center bg-ip-dark-violet px-6 py-[4.5rem]">
        <h2 className="text-center text-[2.44rem] leading-[1.02]">
          {cta.copy}
        </h2>
        <Button label={cta.buttonCopy} className="mt-10 px-[1.4rem]" />
      </div>
    </section>
  );
}
