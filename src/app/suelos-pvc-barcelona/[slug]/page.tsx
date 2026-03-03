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
// Static params — 65 Barcelona city barrio pages
// ---------------------------------------------------------------------------

const bcnCityLocations = locations.filter((loc) => loc.isBcnCity);

export function generateStaticParams(): Array<{ slug: string }> {
  return bcnCityLocations.map((loc) => ({ slug: loc.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const location = bcnCityLocations.find((loc) => loc.slug === slug);
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

export default async function BarcelonaBarrioPage({ params }: Props) {
  const { slug } = await params;

  const location = bcnCityLocations.find((loc) => loc.slug === slug);
  if (!location) {
    notFound();
  }

  const faqs = generateFaqs(location);
  const introHtml = generateIntro(location);

  const breadcrumbItems = [
    { label: 'Suelos PVC Barcelona', href: '/suelos-pvc-barcelona' },
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
