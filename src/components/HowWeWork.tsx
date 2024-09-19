import { cta } from "@/libs/data";

export default function HowWeWork() {
  return (
    <section className="relative bg-ip-dark-violet text-ip-very-light-gray">
      <div className="absolute size-[100px] bg-[url(/images/bg-pattern-how-we-work-mobile.svg)]" />
      <h2 className="">{cta.copy}</h2>
      <button className="">{cta.buttonCopy}</button>
    </section>
  );
}


