import { type ClassValue, clsx } from 'clsx';

/**
 * Combina nombres de clase de forma condicional.
 * Utiliza clsx para fusionar clases de manera eficiente.
 *
 * @example
 * cn('px-4', isActive && 'bg-green-500', !isActive && 'bg-gray-200')
 */
export function cn(...classes: ClassValue[]): string {
  return clsx(classes);
}

/**
 * Formatea un precio numérico al formato de moneda europea (euros).
 * Usa coma como separador decimal y el símbolo EUR al final.
 *
 * @param price - Precio en formato numérico (p. ej. 29.99)
 * @returns Cadena formateada como "29,99 EUR" o "29,99 EUR"
 *
 * @example
 * formatPrice(29.99)  // "29,99 EUR"
 * formatPrice(100)    // "100,00 EUR"
 * formatPrice(0)      // "0,00 EUR"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Convierte un texto libre en un slug apto para URL.
 * Elimina acentos, caracteres especiales y espacios extra.
 *
 * @param text - Texto a convertir (p. ej. "Suelos PVC en Gràcia")
 * @returns Slug en minúsculas separado por guiones (p. ej. "suelos-pvc-en-gracia")
 *
 * @example
 * slugify('Gràcia & L\'Eixample') // "gracia-l-eixample"
 * slugify('  Hola   Mundo  ')     // "hola-mundo"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')                   // Descompone caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '')    // Elimina marcas diacríticas
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')      // Elimina caracteres no alfanuméricos
    .replace(/[\s_]+/g, '-')            // Reemplaza espacios y guiones bajos por guiones
    .replace(/-+/g, '-')               // Colapsa guiones consecutivos
    .replace(/^-+|-+$/g, '');          // Elimina guiones al inicio y al final
}

/**
 * Trunca un texto a una longitud determinada y agrega puntos suspensivos.
 * Si el texto es mas corto que la longitud indicada, lo devuelve sin cambios.
 * Corta en el ultimo espacio para no partir palabras.
 *
 * @param text - Texto a truncar
 * @param length - Longitud maxima (sin contar los puntos suspensivos)
 * @returns Texto truncado con "..." al final si excede la longitud
 *
 * @example
 * truncate('Suelos de PVC de alta calidad', 15) // "Suelos de PVC..."
 * truncate('Hola', 10)                          // "Hola"
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) {
    return text;
  }

  // Corta en el ultimo espacio para no partir palabras
  const truncated = text.slice(0, length);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + '...';
  }

  return truncated + '...';
}
