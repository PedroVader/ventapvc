/**
 * Generic JSON-LD structured data component.
 *
 * Renders a <script type="application/ld+json"> tag with the provided data
 * serialized as JSON. This is the low-level building block used by all other
 * schema components.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
