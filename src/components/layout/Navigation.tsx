'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

type SubLink = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: SubLink[];
};

const navItems: NavItem[] = [
  {
    label: 'Suelos PVC',
    href: '/suelos-pvc',
    children: [
      { label: 'Eventos', href: '/suelos-pvc/eventos' },
      { label: 'Doméstico', href: '/suelos-pvc/domestico' },
      { label: 'Oficinas', href: '/suelos-pvc/oficinas' },
      { label: 'Colegios', href: '/suelos-pvc/colegios' },
      { label: 'Hospital', href: '/suelos-pvc/hospital' },
      { label: 'Otros', href: '/suelos-pvc/otros' },
    ],
  },
  { label: 'Instalación', href: '/instalacion' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contacto' },
];

type NavigationProps = {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  onLinkClick?: () => void;
};

export { navItems };
export type { NavItem, SubLink };

export default function Navigation({
  className,
  orientation = 'horizontal',
  onLinkClick,
}: NavigationProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (orientation === 'vertical') return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (orientation === 'vertical') return;
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const isHorizontal = orientation === 'horizontal';

  return (
    <nav
      className={clsx(
        isHorizontal ? 'flex items-center gap-1' : 'flex flex-col gap-1',
        className,
      )}
      ref={dropdownRef}
    >
      {navItems.map((item) => {
        const active = isActive(item.href);
        const hasChildren = item.children && item.children.length > 0;
        const isOpen = openDropdown === item.label;

        if (hasChildren) {
          return (
            <div
              key={item.label}
              className={clsx('relative', isHorizontal ? '' : 'w-full')}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => handleToggle(item.label)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className={clsx(
                  'inline-flex items-center gap-1 rounded-lg font-medium transition-colors duration-200',
                  isHorizontal ? 'px-3 py-2 text-sm' : 'w-full px-4 py-3 text-base',
                  active
                    ? 'bg-primary/10 text-accent'
                    : 'text-primary hover:bg-primary/5 hover:text-accent',
                )}
              >
                {item.label}
                <svg
                  className={clsx(
                    'h-4 w-4 transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div
                  className={clsx(
                    'z-50 min-w-[200px] overflow-hidden rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/5',
                    isHorizontal
                      ? 'absolute left-0 top-full mt-1'
                      : 'relative mt-1 ml-4 shadow-none ring-0',
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'block px-4 py-2.5 text-sm font-medium transition-colors duration-150',
                      isActive(item.href) && pathname === item.href
                        ? 'bg-accent/10 text-accent'
                        : 'text-primary hover:bg-bg-alt hover:text-accent',
                    )}
                  >
                    Ver todos los suelos PVC
                  </Link>
                  <div className="mx-3 border-t border-gray-100" />
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'block px-4 py-2.5 text-sm transition-colors duration-150',
                        isActive(child.href)
                          ? 'bg-accent/10 text-accent font-medium'
                          : 'text-gray-700 hover:bg-bg-alt hover:text-accent',
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick}
            className={clsx(
              'rounded-lg font-medium transition-colors duration-200',
              isHorizontal ? 'px-3 py-2 text-sm' : 'px-4 py-3 text-base',
              active
                ? 'bg-primary/10 text-accent'
                : 'text-primary hover:bg-primary/5 hover:text-accent',
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
