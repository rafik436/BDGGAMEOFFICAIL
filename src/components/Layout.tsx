import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Send, Download, LogIn, UserPlus } from 'lucide-react';
import { Link, useRouter } from '../lib/router';
import { GUIDE_PAGES } from '../data/guides';
import { BRAND_ASSETS, EXTERNAL_LINKS } from '../data/links';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setGuidesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const isGuideActive = GUIDE_PAGES.some((g) => g.path === pathname);

  return (
    <div className="relative flex min-h-screen flex-col bg-[#09090B] text-[#E4E4E7]">
      {/* Fixed Softly Blurred Site Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <img
          src={BRAND_ASSETS.siteBackground}
          alt=""
          className="h-full w-full scale-105 object-cover object-top opacity-85 blur-[3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/40 via-[#09090B]/25 to-[#09090B]/55" />
      </div>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#FACC15] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#09090B]"
      >
        Skip to main content
      </a>

      {/* Strict 3-Zone Top Bar Contract (<= 64px mobile sticky cap) */}
      <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-[#09090B]/95 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
          {/* Zone 1: Uploaded BDG Game Logo */}
          <Link
            to="/"
            aria-label="BDG Game Home"
            className="flex shrink-0 items-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#FACC15]"
          >
            <img
              src={BRAND_ASSETS.logo}
              alt="BDG Game"
              className="h-9 w-auto shrink-0 rounded border border-white/15 bg-black object-contain px-2 py-0.5"
            />
          </Link>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-6 text-sm font-medium lg:flex"
          >
            <Link
              to="/"
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#FACC15] ${
                pathname === '/' ? 'text-[#FACC15]' : 'text-zinc-300'
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={guidesOpen}
                onClick={() => setGuidesOpen((v) => !v)}
                className={`flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#FACC15] ${
                  isGuideActive ? 'text-[#FACC15]' : 'text-zinc-300'
                }`}
              >
                <span>Game Guides</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${
                    guidesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {guidesOpen && (
                <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/10 bg-[#111216] p-2 shadow-2xl">
                  {GUIDE_PAGES.map((guide) => (
                    <Link
                      key={guide.path}
                      to={guide.path}
                      className={`block rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                        pathname === guide.path
                          ? 'bg-[#FACC15]/10 font-semibold text-[#FACC15]'
                          : 'text-zinc-200 hover:bg-white/[0.04] hover:text-[#FACC15]'
                      }`}
                    >
                      {guide.shortLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/how-to-play-bdg-game/"
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#FACC15] ${
                pathname === '/how-to-play-bdg-game/' ? 'text-[#FACC15]' : 'text-zinc-300'
              }`}
            >
              How to Play
            </Link>

            <Link
              to="/blog/"
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#FACC15] ${
                pathname.startsWith('/blog/') ? 'text-[#FACC15]' : 'text-zinc-300'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/about/"
              className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#FACC15] ${
                pathname === '/about/' ? 'text-[#FACC15]' : 'text-zinc-300'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={EXTERNAL_LINKS.registerLoginApk}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="hidden whitespace-nowrap shrink-0 items-center gap-1.5 rounded-lg bg-[#FACC15] px-4 py-2 text-xs font-semibold text-[#09090B] transition-colors hover:bg-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FACC15] sm:inline-flex"
            >
              <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Register</span>
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-[#121318] text-white transition-colors hover:border-[#FACC15]/60 hover:text-[#FACC15] lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-[#0D0E12] px-4 py-5 shadow-2xl lg:hidden">
            <nav aria-label="Mobile Navigation" className="mx-auto max-w-xl space-y-5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FACC15] px-3.5 py-2.5 text-sm font-semibold text-[#09090B]"
                >
                  <UserPlus className="h-4 w-4" aria-hidden="true" />
                  <span>Register</span>
                </a>
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-[#14151B] px-3.5 py-2.5 text-sm font-semibold text-white"
                >
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  <span>Login</span>
                </a>
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-[#14151B] px-3.5 py-2.5 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>APK Download</span>
                </a>
                <a
                  href={EXTERNAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#FACC15]/40 bg-[#14151B] px-3.5 py-2.5 text-sm font-medium text-[#FACC15]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Telegram</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/"
                  className="rounded-lg border border-white/10 bg-[#14151B] px-3.5 py-2.5 text-sm font-medium text-white hover:border-[#FACC15]/50"
                >
                  Home
                </Link>
                <Link
                  to="/blog/"
                  className="rounded-lg border border-white/10 bg-[#14151B] px-3.5 py-2.5 text-sm font-medium text-white hover:border-[#FACC15]/50"
                >
                  Blog Articles
                </Link>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium text-zinc-400">Information Guides</p>
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {GUIDE_PAGES.map((guide) => (
                    <Link
                      key={guide.path}
                      to={guide.path}
                      className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                        pathname === guide.path
                          ? 'bg-[#FACC15] font-semibold text-[#09090B]'
                          : 'bg-[#14151B] text-zinc-200 hover:text-[#FACC15]'
                      }`}
                    >
                      {guide.shortLabel}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-xs text-zinc-400">
                <Link to="/about/" className="hover:text-[#FACC15]">
                  About Us
                </Link>
                <span aria-hidden="true">·</span>
                <Link to="/contact/" className="hover:text-[#FACC15]">
                  Contact
                </Link>
                <span aria-hidden="true">·</span>
                <Link to="/disclaimer/" className="hover:text-[#FACC15]">
                  Disclaimer
                </Link>
                <span aria-hidden="true">·</span>
                <Link to="/sitemap/" className="hover:text-[#FACC15]">
                  Sitemap
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content" className="relative z-10 flex-1">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#070709]/85 text-zinc-400 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand & Disclaimer Column */}
            <div className="space-y-4 md:col-span-5">
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-display text-lg font-bold tracking-tight text-white"
              >
                <img
                  src={BRAND_ASSETS.logo}
                  alt="BDG Game Logo"
                  loading="lazy"
                  className="h-9 w-auto rounded border border-white/15 bg-black object-contain px-2 py-0.5"
                />
                <span>BDG Game Official</span>
              </Link>
              <p className="text-sm leading-relaxed text-zinc-400">
                BDGGameOfficial.net is an independent informational website. It is not affiliated
                with, endorsed by, or operated by any BDG Game platform or operator. Users should
                independently verify platform details, applicable laws and terms before using any
                gaming service.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-lg bg-[#FACC15] px-3.5 py-2 text-xs font-semibold text-[#09090B] hover:bg-[#EAB308]"
                >
                  Register / Login
                </a>
                <a
                  href={EXTERNAL_LINKS.registerLoginApk}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="rounded-lg border border-white/15 bg-[#121318] px-3.5 py-2 text-xs font-semibold text-white hover:border-[#FACC15]"
                >
                  APK Download
                </a>
                <a
                  href={EXTERNAL_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#FACC15]/40 bg-[#121318] px-3.5 py-2 text-xs font-semibold text-[#FACC15] hover:bg-[#FACC15]/10"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Join Telegram</span>
                </a>
              </div>
              <p className="text-xs text-zinc-500">
                18+ Only · Informational &amp; Educational Resource · Verify Regional Gaming Laws
              </p>
            </div>

            {/* Guides Links */}
            <div className="md:col-span-4">
              <h3 className="mb-4 font-display text-sm font-semibold text-white">
                User Information Guides
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 md:grid-cols-1">
                {GUIDE_PAGES.map((guide) => (
                  <li key={guide.path}>
                    <Link
                      to={guide.path}
                      className="inline-flex items-center gap-1 transition-colors hover:text-[#FACC15]"
                    >
                      <span>{guide.shortLabel}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional & Legal Links */}
            <div className="md:col-span-3">
              <h3 className="mb-4 font-display text-sm font-semibold text-white">
                Resources &amp; Legal
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/blog/" className="transition-colors hover:text-[#FACC15]">
                    Educational Blog (10 Guides)
                  </Link>
                </li>
                <li>
                  <Link to="/about/" className="transition-colors hover:text-[#FACC15]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="transition-colors hover:text-[#FACC15]">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy/" className="transition-colors hover:text-[#FACC15]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms/" className="transition-colors hover:text-[#FACC15]">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer/" className="transition-colors hover:text-[#FACC15]">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} BDGGameOfficial.net · Independent Gaming Information Portal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
