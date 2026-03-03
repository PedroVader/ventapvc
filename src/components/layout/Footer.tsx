import clsx from 'clsx';
import Link from 'next/link';

const productLinks = [
  { label: 'Eventos', href: '/suelos-pvc/eventos' },
  { label: 'Doméstico', href: '/suelos-pvc/domestico' },
  { label: 'Oficinas', href: '/suelos-pvc/oficinas' },
  { label: 'Colegios', href: '/suelos-pvc/colegios' },
  { label: 'Hospital', href: '/suelos-pvc/hospital' },
  { label: 'Otros', href: '/suelos-pvc/otros' },
];

const serviceLinks = [
  { label: 'Instalación', href: '/instalacion' },
  { label: 'Presupuesto Gratis', href: '/presupuesto' },
  { label: 'Envío a Domicilio', href: '/envio' },
  { label: 'Asesoramiento', href: '/contacto' },
];

const companyLinks = [
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Blog', href: '/blog' },
  { label: 'Política de Privacidad', href: '/politica-de-privacidad' },
  { label: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
];


const cityLinks = [
  { label: 'Barcelona', href: '/suelos-pvc-barcelona' },
  { label: 'Madrid', href: '/suelos-pvc-madrid' },
  { label: 'Valencia', href: '/suelos-pvc-valencia' },
  { label: 'Sevilla', href: '/suelos-pvc-sevilla' },
  { label: 'Bilbao', href: '/suelos-pvc-bilbao' },
  { label: 'Zaragoza', href: '/suelos-pvc-zaragoza' },
  { label: 'Málaga', href: '/suelos-pvc-malaga' },
  { label: 'Palma', href: '/suelos-pvc-palma' },
];

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-300 transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        {/* 4 Column grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <FooterColumn title="Productos" links={productLinks} />
          <FooterColumn title="Servicios" links={serviceLinks} />
          <FooterColumn title="Empresa" links={companyLinks} />

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  C/ Industria 45, Local 3
                  <br />
                  08025 Barcelona, España
                </span>
              </li>
              <li>
                <a
                  href="tel:+34934123456"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-accent"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
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
              </li>
              <li>
                <a
                  href="mailto:ventas@disstands.com"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-accent"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  ventas@disstands.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* City SEO links */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-400">
            Suelos PVC en tu ciudad
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {cityLinks.map((city, index) => (
              <span key={city.href} className="flex items-center gap-4">
                <Link
                  href={city.href}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-accent"
                >
                  {city.label}
                </Link>
                {index < cityLinks.length - 1 && (
                  <span className="text-white/20" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <Link href="/" className="flex flex-col" aria-label="VentaPVC.com - Inicio">
              <span className="text-lg font-bold leading-tight text-white">
                VentaPVC<span className="text-accent">.com</span>
              </span>
              <span className="text-[10px] leading-tight tracking-wide text-gray-500">
                by Disstands
              </span>
            </Link>
            <p className="text-center text-xs text-gray-500 sm:text-right">
              &copy; 2025 VentaPVC.com &mdash; Marca de Disstands S.L.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
