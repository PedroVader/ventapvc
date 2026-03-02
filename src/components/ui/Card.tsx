import clsx from 'clsx';

type CardVariant = 'default' | 'alt';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white',
  alt: 'bg-bg-alt',
};

export default function Card({
  children,
  className,
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl p-6 shadow-md',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}
