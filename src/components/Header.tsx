import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/libs/data";
import { cn } from "@/libs/utils";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <div className="relative h-10 w-20">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            fill
            alt="logo"
            className="object-contain"
          />
        </Link>
      </div>
      <nav className="flex">
        <ul className="flex">
          {navLinks.map((link) => (
            <li className="" key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        aria-label="Open Menu"
        className={cn(
          "size-8 bg-[url('/images/icon-hamburger.svg')] bg-contain bg-no-repeat",
        )}
      ></button>
    </header>
  );
}
