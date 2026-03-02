import JsonLd from './JsonLd';

interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Renders an FAQPage JSON-LD schema for the given list of questions and
 * answers. Each Q&A pair is represented as a Question/Answer entity inside
 * the mainEntity array.
 */
export default function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}
