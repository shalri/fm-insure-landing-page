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
    <ul className="flex flex-col items-center justify-center gap-y-[2.20rem] sm:mt-[2px] sm:w-full sm:flex-row sm:gap-x-[1.65rem] sm:gap-y-0 sm:text-[0.86rem] sm:tracking-widest">
      {navLinks.map((link) => (
        <li
          className={cn(
            "w-auto uppercase text-ip-dark-grayish-violet transition-colors duration-300 hover:text-white sm:hover:text-ip-very-dark-violet",
            link.label === "View plans" &&
              "-mt-2 w-full border-2 border-ip-very-light-gray py-3 text-center hover:bg-ip-dark-violet hover:text-ip-very-light-gray sm:ml-1 sm:mt-0 sm:w-auto sm:border-ip-very-dark-violet sm:px-[1.65rem] sm:py-[0.46rem]",
          )}
          key={link.label}
        >
          <Link
            href={link.href}
            onClick={handleLinkClink}
            className="sm:inline-block"
          >
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
    <header className="z-50 bg-ip-very-light-gray">
      <div className="flex w-full items-center justify-between bg-ip-very-light-gray px-6 py-5 sm:mx-auto sm:max-w-[1154px]">
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
          aria-label={isMobileNavActive ? "Close Menu" : "Open Menu"}
          className={cn(
            "size-8 bg-[url('/images/icon-close.svg')] bg-contain bg-no-repeat sm:hidden",
            !isMobileNavActive && "bg-[url('/images/icon-hamburger.svg')]",
          )}
          onClick={toggleMobileNav}
        ></button>
      </div>
    </header>
  );
}
