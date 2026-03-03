import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { locations } from '@/data/locations';
import {
  generateMetaTitle,
  generateMetaDescription,
  generateIntro,
  generateFaqs,
} from '@/lib/generateContent';
import {
  generateAlternates,
  generateOpenGraph,
} from '@/lib/seo';

import Breadcrumbs from '@/components/layout/Breadcrumbs';

import HeroSection from '@/components/landing/HeroSection';
import WhyPvcSection from '@/components/landing/WhyPvcSection';
import CatalogSection from '@/components/landing/CatalogSection';
import InstallationSection from '@/components/landing/InstallationSection';
import PricingSection from '@/components/landing/PricingSection';
import DeliverySection from '@/components/landing/DeliverySection';
import RoomGuideSection from '@/components/landing/RoomGuideSection';
import WhyUsSection from '@/components/landing/WhyUsSection';
import FaqSection from '@/components/landing/FaqSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import NearbySection from '@/components/landing/NearbySection';
import CtaSection from '@/components/landing/CtaSection';

import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FaqSchema from '@/components/seo/FaqSchema';
import ProductSchema from '@/components/seo/ProductSchema';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CITY_PREFIX = 'suelos-pvc-';

// All non-BCN-city locations (481 pages)
const nonBcnLocations = locations.filter((loc) => !loc.isBcnCity);

// ---------------------------------------------------------------------------
// Static params — 481 rest-of-Spain landing pages
// ---------------------------------------------------------------------------

export function generateStaticParams(): Array<{ city: string }> {
  return nonBcnLocations.map((loc) => ({
    city: CITY_PREFIX + loc.slug,
  }));
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function extractSlug(cityParam: string): string | null {
  if (!cityParam.startsWith(CITY_PREFIX)) {
    return null;
  }
  return cityParam.slice(CITY_PREFIX.length);
}

function findLocation(cityParam: string) {
  const slug = extractSlug(cityParam);
  if (!slug) return undefined;
  return nonBcnLocations.find((loc) => loc.slug === slug);
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;

  const location = findLocation(city);
  if (!location) {
    return {};
  }

  const title = generateMetaTitle(location);
  const description = generateMetaDescription(location);

  return {
    title,
    description,
    alternates: generateAlternates(location),
    openGraph: generateOpenGraph(location, title, description),
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function CityLandingPage({ params }: Props) {
  const { city } = await params;

  if (!city.startsWith(CITY_PREFIX)) {
    notFound();
  }

  const location = findLocation(city);
  if (!location) {
    notFound();
  }

  const faqs = generateFaqs(location);
  const introHtml = generateIntro(location);

  const breadcrumbItems = [
    { label: 'Suelos PVC', href: '/suelos-pvc' },
    { label: location.community, href: `/suelos-pvc/${location.community.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}` },
    { label: location.name },
  ];

  return (
    <>
      {/* Structured data */}
      <LocalBusinessSchema location={location} />
      <BreadcrumbSchema location={location} />
      <FaqSchema faqs={faqs} />
      <ProductSchema location={location} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <HeroSection location={location} />

        {/* Introduccion contextualizada */}
        <section id="introduccion" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: introHtml }}
          />
        </section>

        <WhyPvcSection location={location} />
        <CatalogSection location={location} />
        <InstallationSection location={location} />
        <PricingSection location={location} />
        <DeliverySection location={location} />
        <RoomGuideSection location={location} />
        <WhyUsSection location={location} />
        <FaqSection location={location} faqs={faqs} />
        <TestimonialsSection location={location} />
        <NearbySection location={location} />
        <CtaSection location={location} />
    </>
  );
}
