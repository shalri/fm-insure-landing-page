import { features } from "@/libs/data";
import Image from "next/image";

export default function Features() {
  return (
    <article className="">
      <h2 className="">We&apos;re different</h2>
      {features.map((feature) => (
        <section className="" key={feature.heading}>
          <div className="relative size-20">
            <Image
              src={feature.icon}
              alt={feature.heading}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="">{feature.heading}</h3>
          <p className="">{feature.description}</p>
        </section>
      ))}
    </article>
  );
}
