'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        scrolled && 'shadow-md',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col" aria-label="VentaPVC.com - Inicio">
          <span className="text-xl font-bold leading-tight text-primary sm:text-2xl">
            VentaPVC<span className="text-accent">.com</span>
          </span>
          <span className="text-[10px] leading-tight tracking-wide text-gray-400 sm:text-xs">
            by Disstands
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <Navigation orientation="horizontal" />
        </div>

        {/* Desktop Right: Phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+34934123456"
            className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            934 123 456
          </a>
          <Link
            href="/presupuesto"
            className={clsx(
              'inline-flex items-center justify-center',
              'rounded-lg px-5 py-2.5 text-sm font-semibold',
              'bg-accent text-white',
              'transition-colors duration-200 hover:bg-accent-hover',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2',
            )}
          >
            Pide Presupuesto
          </Link>
        </div>

        {/* Mobile: Phone icon + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+34934123456"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/5"
            aria-label="Llamar al 934 123 456"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/5"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-black/30 lg:hidden">
          <div className="h-full overflow-y-auto bg-white shadow-xl">
            <div className="flex flex-col gap-2 px-4 py-4">
              <Navigation
                orientation="vertical"
                onLinkClick={closeMobileMenu}
              />
              <div className="mt-4 border-t border-gray-100 pt-4">
                <a
                  href="tel:+34934123456"
                  className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  934 123 456
                </a>
                <Link
                  href="/presupuesto"
                  onClick={closeMobileMenu}
                  className={clsx(
                    'mt-2 flex w-full items-center justify-center',
                    'rounded-lg px-6 py-3 text-base font-semibold',
                    'bg-accent text-white',
                    'transition-colors duration-200 hover:bg-accent-hover',
                  )}
                >
                  Pide Presupuesto
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
