"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { GoogleTranslate } from "@/components/google-translate";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center gap-2 sm:gap-3 md:gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 group mr-auto min-w-0"
          aria-label={`${siteConfig.fullName} home`}
        >
          <Logo />
          <span className="font-serif text-base sm:text-lg tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors truncate">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-sage-700 transition-colors rounded-md"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-sage-700 hover:bg-sage-800 transition-colors px-4 py-2 text-sm font-medium text-white"
        >
          Get in touch
        </Link>

        <GoogleTranslate />

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-sage-900 hover:bg-muted shrink-0"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav aria-label="Mobile" className="container-wide flex flex-col py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-medium text-foreground/80 hover:text-sage-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sage-700 hover:bg-sage-800 px-4 py-2.5 text-sm font-medium text-white"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={40}
      height={40}
      priority
      className="h-10 w-10 object-contain"
    />
  );
}
