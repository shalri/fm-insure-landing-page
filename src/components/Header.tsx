"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/libs/data";
import { cn } from "@/libs/utils";
import { useMobileNav } from "@/hooks/useMobileNavigation";
import { useCallback, useRef } from "react";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const NavContent = React.memo(function NavContent({
  handleLinkClink,
}: {
  handleLinkClink: (e: React.MouseEvent) => void;
}) {
  return (
    <ul className="flex flex-col items-center justify-center gap-y-[2.20rem]">
      {navLinks.map((link) => (
        <li
          className={cn(
            "uppercase",
            link.label === "View plans" &&
              "-mt-2 w-full border-2 border-ip-very-light-gray py-3 text-center hover:bg-ip-dark-violet",
          )}
          key={link.label}
        >
          <Link href={link.href} onClick={handleLinkClink}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default function Header() {
  const isSmallScreen = useSmallScreen();
  const navRef = useRef<HTMLDivElement>(null);
  const { isMobileNavActive, toggleMobileNav, closeMobileNav } = useMobileNav(
    navRef,
    isSmallScreen,
  );

  const mobileNavAnimationWrapper = useCallback(
    (children: React.ReactNode) => {
      return (
        <AnimatePresence>
          {isMobileNavActive && (
            <motion.div
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 mt-20 overflow-hidden bg-ip-very-dark-violet bg-[url(/images/bg-pattern-mobile-nav.svg)] bg-contain bg-bottom bg-no-repeat px-6 pt-[2.8rem] text-[1.25rem] font-bold tracking-[0.1rem] text-ip-very-light-gray"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      );
    },
    [isMobileNavActive],
  );

  const handleLinkClink = () => {
    if (isSmallScreen) {
      closeMobileNav();
    }
  };

  return (
    <header className="z-20 flex w-full items-center justify-between px-6 py-5">
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
      <nav className="relative" ref={navRef}>
        {isSmallScreen ? (
          mobileNavAnimationWrapper(
            <NavContent handleLinkClink={handleLinkClink} />,
          )
        ) : (
          <NavContent handleLinkClink={handleLinkClink} />
        )}
      </nav>
      <button
        aria-label="Open Menu"
        className={cn(
          "size-8 bg-[url('/images/icon-hamburger.svg')] bg-contain bg-no-repeat",
          !isMobileNavActive && "bg-[url('/images/icon-close.svg')]",
        )}
        onClick={toggleMobileNav}
      ></button>
    </header>
  );
}
