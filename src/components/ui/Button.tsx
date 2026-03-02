import clsx from 'clsx';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: clsx(
    'bg-accent text-white',
    'hover:bg-accent-hover',
    'focus-visible:ring-accent/50',
  ),
  secondary: clsx(
    'bg-primary text-white',
    'hover:bg-primary-light',
    'focus-visible:ring-primary/50',
  ),
  outline: clsx(
    'border-2 border-primary text-primary bg-transparent',
    'hover:bg-primary hover:text-white',
    'focus-visible:ring-primary/50',
  ),
  ghost: clsx(
    'bg-transparent text-primary',
    'hover:bg-primary/10',
    'focus-visible:ring-primary/50',
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center',
    'rounded-lg font-semibold',
    'transition-colors duration-200 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
