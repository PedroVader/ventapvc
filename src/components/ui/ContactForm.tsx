'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';

type ContactFormProps = {
  className?: string;
  /** Netlify form name — each unique name creates a separate inbox */
  formName?: string;
  /** Show the "tipo de suelo" and "metros" fields (presupuesto mode) */
  showProjectFields?: boolean;
};

const TIPOS_SUELO = [
  { value: '', label: 'Selecciona categoría de suelo' },
  { value: 'eventos', label: 'Eventos (ferias, congresos)' },
  { value: 'domestico', label: 'Uso Doméstico' },
  { value: 'oficinas', label: 'Oficinas' },
  { value: 'colegios', label: 'Colegios y Centros Educativos' },
  { value: 'hospital', label: 'Hospital y Sanitario' },
  { value: 'otros', label: 'Otros (transporte, náutico, exterior)' },
  { value: 'no-seguro', label: 'No estoy seguro' },
];

const inputStyles = clsx(
  'block w-full rounded-lg border border-gray-300 px-4 py-2.5',
  'text-sm text-primary placeholder:text-[var(--color-text-light)]/60',
  'transition-colors duration-200',
  'focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none',
);

const labelStyles = 'block mb-1.5 text-sm font-medium text-primary';

export default function ContactForm({
  className,
  formName = 'contacto',
  showProjectFields = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={clsx(
          'rounded-xl bg-green-50 p-8 text-center shadow-md',
          className,
        )}
        role="status"
      >
        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className="mt-4 text-lg font-semibold text-green-800">
          ¡Gracias por tu mensaje!
        </p>
        <p className="mt-2 text-sm text-green-700">
          Nos pondremos en contacto contigo en menos de 24 horas laborables.
        </p>
      </div>
    );
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={clsx('space-y-5', className)}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

      {/* Nombre */}
      <div>
        <label htmlFor={`${formName}-nombre`} className={labelStyles}>
          Nombre <span className="text-accent">*</span>
        </label>
        <input
          id={`${formName}-nombre`}
          name="nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre completo"
          className={inputStyles}
        />
      </div>

      {/* Email y Teléfono */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-email`} className={labelStyles}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id={`${formName}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor={`${formName}-telefono`} className={labelStyles}>
            Teléfono
          </label>
          <input
            id={`${formName}-telefono`}
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+34 600 000 000"
            className={inputStyles}
          />
        </div>
      </div>

      {/* Ciudad y Tipo de suelo */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-ciudad`} className={labelStyles}>
            Ciudad <span className="text-accent">*</span>
          </label>
          <input
            id={`${formName}-ciudad`}
            name="ciudad"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Ej: Barcelona, Madrid..."
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor={`${formName}-tipoSuelo`} className={labelStyles}>
            Tipo de suelo <span className="text-accent">*</span>
          </label>
          <select
            id={`${formName}-tipoSuelo`}
            name="tipoSuelo"
            required
            className={clsx(inputStyles, 'appearance-none bg-white')}
          >
            {TIPOS_SUELO.map((option) => (
              <option key={option.value} value={option.value} disabled={option.value === ''}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project-specific fields for presupuesto */}
      {showProjectFields && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formName}-metros`} className={labelStyles}>
              Metros cuadrados aprox.
            </label>
            <input
              id={`${formName}-metros`}
              name="metros"
              type="number"
              min="1"
              placeholder="Ej: 50"
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor={`${formName}-instalacion`} className={labelStyles}>
              ¿Necesitas instalación?
            </label>
            <select
              id={`${formName}-instalacion`}
              name="instalacion"
              className={clsx(inputStyles, 'appearance-none bg-white')}
            >
              <option value="">Selecciona una opción</option>
              <option value="si">Sí, necesito instalación</option>
              <option value="no">No, solo material</option>
              <option value="no-seguro">No estoy seguro</option>
            </select>
          </div>
        </div>
      )}

      {/* Mensaje */}
      <div>
        <label htmlFor={`${formName}-mensaje`} className={labelStyles}>
          Mensaje <span className="text-accent">*</span>
        </label>
        <textarea
          id={`${formName}-mensaje`}
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos qué necesitas: tipo de estancia, presupuesto estimado, dudas..."
          className={clsx(inputStyles, 'resize-y')}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700" role="alert">
          Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo o escríbenos a ventas@disstands.com.
        </div>
      )}

      {/* Submit */}
      <div>
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={submitting}>
          {submitting ? 'Enviando...' : showProjectFields ? 'Solicitar Presupuesto Gratis' : 'Enviar Mensaje'}
        </Button>
        <p className="mt-2 text-xs text-[var(--color-text-light)]">
          Los campos marcados con <span className="text-accent">*</span> son obligatorios.
        </p>
      </div>
    </form>
  );
}
