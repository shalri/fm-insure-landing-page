import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/libs/data";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative pb-12 pt-[1.6rem] sm:pt-[0.72rem]">
      <div className="absolute -top-[28] left-0 h-[375px] w-[300px] bg-[url(/images/bg-pattern-footer-mobile.svg)] bg-contain bg-no-repeat sm:w-[470] sm:bg-[url(/images/bg-pattern-footer-desktop.svg)]" />
      <div className="sm:mx-auto sm:max-w-[1156px]">
        <div className="border-ip-grayish-blue/90 flex flex-col items-center border-b px-4 pb-10 sm:flex-row sm:justify-between sm:px-6 sm:pb-[1.65rem]">
          {/* Logo Section */}
          <div className="relative h-10 w-[7rem]">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                fill
                alt="logo"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Social Links */}
          <ul className="z-50 mt-4 flex space-x-3 sm:mt-0">
            {socialLinks.map((link) => {
              // Dynamically select the correct icon based on the label
              const IconComponent = {
                Facebook: FaFacebookSquare,
                Twitter: FaTwitterSquare,
                Pinterest: FaPinterestSquare,
                Instagram: FaInstagramSquare,
              }[link.label]; // Match the label to the correct icon

              return (
                <li key={link.label}>
                  <a href={link.href} target="_blank">
                    {IconComponent && (
                      <IconComponent className="transition-color text-[1.9rem] text-ip-dark-grayish-violet duration-300 hover:text-ip-very-dark-violet sm:text-[1.70rem]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <section className="mt-[2.35rem] uppercase sm:mt-[2.9rem] sm:grid sm:grid-cols-4 sm:items-start sm:gap-x-7 sm:px-6">
          {footerLinks.map((link) => (
            <div
              className="mb-9 text-center tracking-[0.075em] sm:text-left"
              key={link.category}
            >
              <h3 className="font-copy text-[.775rem] font-semibold text-ip-dark-grayish-violet">
                {link.category}
              </h3>
              <ul className="mt-8">
                {link.links.map((page) => (
                  <li
                    className="mt-[0.6rem] text-[.875rem] font-semibold text-ip-dark-violet"
                    key={page.label}
                  >
                    <Link href={page.href} className="hover:underline">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
}
