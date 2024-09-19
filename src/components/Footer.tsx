import Link from "next/link";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/libs/data"; // Your socialLinks array
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex">
        {/* Logo Section */}
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

        {/* Social Links */}
        <ul className="flex space-x-4">
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
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {IconComponent && (
                    <IconComponent className="text-2xl text-gray-500 hover:text-blue-500" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <section className="">
        {footerLinks.map((link) => (
          <div className="" key={link.category}>
            <h3 className="font-copy">{link.category}</h3>
            <ul className="">
              {link.links.map((page) => (
                <li className="" key={page.label}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </footer>
  );
}
