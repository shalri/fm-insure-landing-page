import { hero } from "@/libs/data";

export default function Hero() {
  return (
    <section className="relative grid self-start">
      {/* <div className="relative h-20 w-20"> */}
      {/*   <Image */}
      {/*     src="/images/image-intro-mobile.jpg" */}
      {/*     alt="Intro image" */}
      {/*     fill */}
      {/*     className="object-contain" */}
      {/*   /> */}
      {/* </div> */}
      <div className="h-[450px] w-full bg-[url(/images/image-intro-mobile.jpg)] bg-no-repeat object-contain sm:bg-[url(/images/image-intro-desktop.jpg)]" />
      <div className="relative bg-ip-dark-violet text-ip-very-light-gray">
        <div className="absolute left-0 top-0 size-[100px] bg-[url(/images/bg-pattern-intro-left-mobile.svg)] bg-contain bg-no-repeat" />
        <div className="absolute bottom-0 right-0 size-[100px] bg-[url(/images/bg-pattern-intro-right-mobile.svg)] bg-contain bg-no-repeat" />
        <h1 className="">{hero.heading}</h1>
        <p className="">{hero.copy}</p>
        <button className="">{hero.callToAction}</button>
      </div>
    </section>
  );
}
