import { hero } from "@/libs/data";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative grid">
      <div className="h-[450px] w-full bg-[url(/images/image-intro-mobile.jpg)] bg-cover bg-bottom bg-no-repeat sm:bg-[url(/images/image-intro-desktop.jpg)]" />
      <div className="relative bg-ip-dark-violet pb-[5.8rem] pt-20 text-ip-very-light-gray">
        {/* Background patterns */}
        <div className="absolute left-0 top-0 size-[170px] bg-[url(/images/bg-pattern-intro-left-mobile.svg)] bg-contain bg-no-repeat" />
        <div className="absolute -bottom-[176px] right-0 size-[330px] bg-[url(/images/bg-pattern-intro-right-mobile.svg)] bg-contain bg-right bg-no-repeat" />
        <div className="mt-4 px-3 text-center">
          <h1 className="text-[2.90rem] leading-[1.02]">{hero.heading}</h1>
          <p className="mt-4 px-4 leading-relaxed">{hero.copy}</p>

          <Button label={hero.callToAction} className="mt-8" />
        </div>
      </div>
    </section>
  );
}
