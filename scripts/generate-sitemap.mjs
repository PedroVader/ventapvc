import { writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'out');
const baseUrl = 'https://ventapvc.com';
const today = new Date().toISOString().split('T')[0];

function collectPages(dir, prefix = '') {
  const pages = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      if (entry.startsWith('_') || entry === 'images') continue;
      pages.push(...collectPages(fullPath, `${prefix}/${entry}`));
    } else if (entry.endsWith('.html') && entry !== '404.html') {
      const name = entry.replace('.html', '');
      if (name.startsWith('_')) continue;
      // index.html -> directory path, other.html -> /other
      if (name === 'index') {
        pages.push(prefix || '/');
      } else {
        pages.push(`${prefix}/${name}`);
      }
    }
  }
  return pages;
}

const pages = [...new Set(collectPages(outDir))];

function getPriority(path) {
  if (path === '/') return '1.0';
  if (path === '/suelos-pvc' || path === '/suelos-pvc-barcelona') return '0.9';
  if (path.startsWith('/suelos-pvc/') && path.split('/').length === 3) return '0.8';
  if (path.startsWith('/suelos-pvc-barcelona/')) return '0.8';
  if (path.startsWith('/suelos-pvc/') && path.split('/').length === 4) return '0.7';
  if (path.startsWith('/suelos-pvc-')) return '0.7';
  if (['/blog', '/instalacion', '/presupuesto'].includes(path)) return '0.7';
  return '0.5';
}

function getFreq(path) {
  if (path === '/' || path === '/suelos-pvc' || path === '/blog') return 'weekly';
  if (path.startsWith('/suelos-pvc/') && path.split('/').length === 3) return 'weekly';
  return 'monthly';
}

const excluded = ['/politica-de-privacidad', '/terminos-y-condiciones', '/envio'];
const filtered = pages
  .filter(p => !excluded.includes(p))
  .sort((a, b) => parseFloat(getPriority(b)) - parseFloat(getPriority(a)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${filtered.map(p => `  <url>
    <loc>${baseUrl}${p === '/' ? '' : p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getFreq(p)}</changefreq>
    <priority>${getPriority(p)}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(outDir, 'sitemap.xml'), xml);
console.log(`Sitemap generated with ${filtered.length} URLs`);
