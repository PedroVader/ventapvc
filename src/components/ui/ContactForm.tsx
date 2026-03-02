'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Button from '@/components/ui/Button';

type FormData = {
  nombre: string;
  email: string;
  telefono: string;
  ciudad: string;
  tipoSuelo: string;
  mensaje: string;
};

const TIPOS_SUELO = [
  { value: '', label: 'Selecciona un tipo de suelo' },
  { value: 'vinilico-click', label: 'Vinílico Click' },
  { value: 'vinilico-pegado', label: 'Vinílico Pegado' },
  { value: 'spc', label: 'SPC (Stone Polymer Composite)' },
  { value: 'losetas', label: 'Losetas PVC' },
  { value: 'rollo', label: 'PVC en Rollo' },
  { value: 'otro', label: 'Otro / No estoy seguro' },
];

const inputStyles = clsx(
  'block w-full rounded-lg border border-gray-300 px-4 py-2.5',
  'text-sm text-primary placeholder:text-[#4A5568]/60',
  'transition-colors duration-200',
  'focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none',
);

const labelStyles = 'block mb-1.5 text-sm font-medium text-primary';

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    tipoSuelo: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: replace with actual form submission logic
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
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
        <p className="text-lg font-semibold text-green-800">
          ¡Gracias por tu mensaje!
        </p>
        <p className="mt-2 text-sm text-green-700">
          Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx('space-y-5', className)}
      noValidate={false}
    >
      {/* Nombre */}
      <div>
        <label htmlFor="contact-nombre" className={labelStyles}>
          Nombre <span className="text-accent">*</span>
        </label>
        <input
          id="contact-nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      {/* Email y Teléfono */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={labelStyles}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="contact-telefono" className={labelStyles}>
            Teléfono
          </label>
          <input
            id="contact-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+34 600 000 000"
            value={formData.telefono}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
      </div>

      {/* Ciudad y Tipo de suelo */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-ciudad" className={labelStyles}>
            Ciudad <span className="text-accent">*</span>
          </label>
          <input
            id="contact-ciudad"
            name="ciudad"
            type="text"
            required
            autoComplete="address-level2"
            placeholder="Ej: Barcelona, Madrid..."
            value={formData.ciudad}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="contact-tipoSuelo" className={labelStyles}>
            Tipo de suelo <span className="text-accent">*</span>
          </label>
          <select
            id="contact-tipoSuelo"
            name="tipoSuelo"
            required
            value={formData.tipoSuelo}
            onChange={handleChange}
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

      {/* Mensaje */}
      <div>
        <label htmlFor="contact-mensaje" className={labelStyles}>
          Mensaje <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos qué necesitas: metros cuadrados, tipo de estancia, presupuesto estimado..."
          value={formData.mensaje}
          onChange={handleChange}
          className={clsx(inputStyles, 'resize-y')}
        />
      </div>

      {/* Submit */}
      <div>
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Solicitar presupuesto
        </Button>
        <p className="mt-2 text-xs text-[#4A5568]">
          Los campos marcados con <span className="text-accent">*</span> son obligatorios.
        </p>
      </div>
    </form>
  );
}
