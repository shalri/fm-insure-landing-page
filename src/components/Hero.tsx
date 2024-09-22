import { hero } from "@/libs/data";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-ip-dark-violet sm:pt-[6.5rem]">
      {/* Background patterns desktop*/}
      <div className="absolute -bottom-[335px] left-0 hidden h-[505px] w-[200px] bg-[url(/images/bg-pattern-intro-left-desktop.svg)] bg-contain bg-no-repeat sm:block" />
      <div className="absolute -top-[85px] right-0 hidden h-[600px] w-[435px] bg-[url(/images/bg-pattern-intro-right-desktop.svg)] bg-contain bg-right bg-no-repeat sm:block" />

      <div className="sm:mx-auto sm:grid sm:max-w-[1154px] sm:grid-cols-2 sm:px-6">
        <div className="h-[450px] w-full bg-[url(/images/image-intro-mobile.jpg)] bg-cover bg-center bg-no-repeat sm:col-start-2 sm:-mb-[9.65rem] sm:ml-4 sm:h-[650px] sm:max-w-[540px] sm:bg-[url(/images/image-intro-desktop.jpg)]" />
        <div className="relative bg-ip-dark-violet pb-[5.8rem] pt-20 text-ip-very-light-gray sm:row-start-1 sm:bg-transparent sm:pt-0">
          {/* Background patterns mobile*/}
          <div className="absolute left-0 top-0 size-[170px] bg-[url(/images/bg-pattern-intro-left-mobile.svg)] bg-contain bg-no-repeat sm:hidden" />
          <div className="absolute -bottom-[176px] right-0 h-[330px] w-[100px] bg-[url(/images/bg-pattern-intro-right-mobile.svg)] bg-contain bg-right bg-no-repeat sm:hidden" />

          <hr className="mb-[4rem] hidden h-[2px] w-[9.3rem] bg-ip-very-light-gray sm:block" />
          <div className="mt-4 px-3 text-center sm:mt-0 sm:text-pretty sm:pl-0 sm:text-left">
            <h1
              className="text-[2.90rem] leading-[1.02] text-ip-very-light-gray sm:pr-4 sm:text-[4.35rem] sm:leading-[0.907]"
              style={{ fontSize: "clamp(2.90rem, 4.83vw, 4.35rem)" }}
            >
              {hero.heading}
            </h1>
            <p className="mt-4 px-4 leading-relaxed text-ip-very-light-gray sm:mt-7 sm:px-0">
              {hero.copy}
            </p>

            <Button
              label={hero.callToAction}
              className="z-50 mt-8 text-ip-very-light-gray sm:mt-[1.9rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
