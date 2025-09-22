import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'overline';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  component,
  className,
  children,
  ...props
}) => {
  const Component = component || getDefaultComponent(variant);

  return (
    <Component
      className={cn(
        {
          'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight': variant === 'h1',
          'text-3xl md:text-4xl font-bold tracking-tight': variant === 'h2',
          'text-2xl md:text-3xl font-semibold': variant === 'h3',
          'text-xl md:text-2xl font-medium': variant === 'h4',
          'text-base leading-relaxed': variant === 'body',
          'text-sm text-gray-600': variant === 'caption',
          'text-xs uppercase tracking-wide font-medium text-gray-500': variant === 'overline',
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

function getDefaultComponent(variant: string) {
  switch (variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'caption': return 'p';
    case 'overline': return 'span';
    default: return 'p';
  }
}

export default Typography;