import { Inter } from 'next/font/google';

/**
 * Configuracion de la fuente Inter para todo el sitio.
 * Se carga desde Google Fonts con las siguientes opciones:
 * - subsets: solo latin (suficiente para espanol)
 * - display: swap (muestra texto de respaldo mientras carga la fuente)
 * - variable: --font-inter (variable CSS para usar con Tailwind)
 *
 * Uso en layout.tsx:
 * @example
 * import { inter } from '@/styles/fonts';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="es">
 *       <body className={`${inter.variable} font-sans antialiased`}>
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
