import React from 'react';
import * as LucideIcons from 'lucide-react';

export function Icon({ name, className = 'w-5 h-5', ...props }) {
  if (!name) return null;
  const Component = LucideIcons[name] || LucideIcons.Activity;
  return <Component className={className} aria-hidden="true" {...props} />;
}
