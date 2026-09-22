import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  onClick,
  href,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-slate-dark border border-gray-300 hover:border-accent hover:text-accent-ink hover:bg-gray-50 active:bg-gray-100',
    dark:
      'bg-slate-dark text-white hover:bg-slate-800 shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-slate-700',
    outline:
      'bg-transparent text-slate-dark border-2 border-slate-dark hover:bg-slate-dark hover:text-white',
    ghost:
      'bg-transparent text-slate-dark hover:bg-gray-100 hover:text-accent-ink',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
}
