import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join } from 'path';

const outDir = join(import.meta.dirname, '..', 'public', 'images', 'products');
mkdirSync(outDir, { recursive: true });

const categoryColors = {
  eventos:   { bg: '#1e3a5f', accent: '#f59e0b', label: 'Eventos' },
  domestico: { bg: '#2d5016', accent: '#84cc16', label: 'Doméstico' },
  oficinas:  { bg: '#3b2580', accent: '#a78bfa', label: 'Oficinas' },
  colegios:  { bg: '#92400e', accent: '#fbbf24', label: 'Colegios' },
  hospital:  { bg: '#0e4f5c', accent: '#2dd4bf', label: 'Hospital' },
  otros:     { bg: '#4a1d5e', accent: '#e879f9', label: 'Otros' },
};

const products = [
  // Eventos
  { slug: 'pvc-artic', name: 'PVC Artic', cat: 'eventos' },
  { slug: 'pvc-artic-madera', name: 'PVC Artic Madera', cat: 'eventos' },
  { slug: 'pvc-silencio-confort', name: 'PVC Silencio Confort', cat: 'eventos' },
  { slug: 'pvc-compact', name: 'PVC Compact', cat: 'eventos' },
  // Doméstico
  { slug: 'bindis-wood', name: 'Bindis Wood', cat: 'domestico' },
  { slug: 'bindis-stone', name: 'Bindis Stone', cat: 'domestico' },
  { slug: 'bindis-loseta', name: 'Bindis Loseta', cat: 'domestico' },
  { slug: 'taraladis', name: 'Taraladis', cat: 'domestico' },
  { slug: 'mipoldis', name: 'Mipoldis', cat: 'domestico' },
  { slug: 'lundis', name: 'Lundis', cat: 'domestico' },
  { slug: 'muraldis', name: 'Muraldis', cat: 'domestico' },
  { slug: 'twisdis', name: 'Twisdis', cat: 'domestico' },
  { slug: 'marmoredis', name: 'Marmoredis', cat: 'domestico' },
  { slug: 'oro-y-plata-pvc', name: 'Oro y Plata PVC', cat: 'domestico' },
  { slug: 'flocado', name: 'Flocado', cat: 'domestico' },
  { slug: 'imitacion-cemento', name: 'Imitación Cemento', cat: 'domestico' },
  { slug: 'pvc-pradis', name: 'PVC Pradis', cat: 'domestico' },
  // Oficinas
  { slug: 'loseta-oficina', name: 'Loseta Oficina', cat: 'oficinas' },
  { slug: 'loseta-oficina-premium', name: 'Loseta Oficina Premium', cat: 'oficinas' },
  { slug: 'pvc-rollo-oficina', name: 'PVC Rollo Oficina', cat: 'oficinas' },
  { slug: 'pvc-click-oficina', name: 'PVC Click Oficina', cat: 'oficinas' },
  // Colegios
  { slug: 'pvc-aula', name: 'PVC Aula', cat: 'colegios' },
  { slug: 'pvc-deportivo', name: 'PVC Deportivo', cat: 'colegios' },
  { slug: 'pvc-antiestatico', name: 'PVC Antiestático', cat: 'colegios' },
  { slug: 'pvc-compacto-educativo', name: 'PVC Compacto Educativo', cat: 'colegios' },
  // Hospital
  { slug: 'fordis-heterogeneo', name: 'Fordis Heterogéneo', cat: 'hospital' },
  { slug: 'fordis-homogeneo', name: 'Fordis Homogéneo', cat: 'hospital' },
  { slug: 'pvc-antiestatico-hospital', name: 'PVC Antiestático Hospital', cat: 'hospital' },
  { slug: 'pvc-conductivo', name: 'PVC Conductivo', cat: 'hospital' },
  // Otros
  { slug: 'pvc-transporte', name: 'PVC Transporte', cat: 'otros' },
  { slug: 'pvc-nautico', name: 'PVC Náutico', cat: 'otros' },
  { slug: 'pvc-exterior', name: 'PVC Exterior', cat: 'otros' },
  { slug: 'pvc-garaje', name: 'PVC Garaje', cat: 'otros' },
];

function makeSvg(product) {
  const { bg, accent, label } = categoryColors[product.cat];
  // Floor pattern lines
  const lines = [];
  for (let y = 120; y < 380; y += 40) {
    lines.push(`<line x1="80" y1="${y}" x2="720" y2="${y}" stroke="${accent}" stroke-opacity="0.15" stroke-width="1"/>`);
  }
  for (let x = 80; x < 720; x += 80) {
    lines.push(`<line x1="${x}" y1="120" x2="${x}" y2="380" stroke="${accent}" stroke-opacity="0.1" stroke-width="1"/>`);
  }

  return `<svg width="800" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bg}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>
  ${lines.join('\n  ')}
  <!-- Floor tile icon -->
  <rect x="320" y="140" width="160" height="120" rx="8" fill="${accent}" fill-opacity="0.2" stroke="${accent}" stroke-width="2"/>
  <line x1="320" y1="200" x2="480" y2="200" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.5"/>
  <line x1="400" y1="140" x2="400" y2="260" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.5"/>
  <!-- Product name -->
  <text x="400" y="320" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="32" font-weight="700" fill="white">${escapeXml(product.name)}</text>
  <!-- Category badge -->
  <rect x="${400 - label.length * 6 - 16}" y="355" width="${label.length * 12 + 32}" height="30" rx="15" fill="${accent}"/>
  <text x="400" y="376" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="14" font-weight="600" fill="white">${label}</text>
  <!-- Disstands watermark -->
  <text x="400" y="460" text-anchor="middle" font-family="system-ui,Arial,sans-serif" font-size="13" fill="white" fill-opacity="0.4">Disstands — VentaPVC.com</text>
</svg>`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function main() {
  console.log(`Generating ${products.length} placeholder images...`);

  const results = await Promise.all(
    products.map(async (p) => {
      const svg = makeSvg(p);
      const outPath = join(outDir, `${p.slug}.webp`);
      await sharp(Buffer.from(svg))
        .resize(800, 500)
        .webp({ quality: 80 })
        .toFile(outPath);
      return p.slug;
    })
  );

  console.log(`Done! Created ${results.length} images in public/images/products/`);
  results.forEach((slug) => console.log(`  ✓ ${slug}.webp`));
}

main().catch(console.error);
