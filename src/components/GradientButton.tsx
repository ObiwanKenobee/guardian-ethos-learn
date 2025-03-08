
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gradientFrom?: string;
  gradientTo?: string;
  hoverFrom?: string;
  hoverTo?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  gradientFrom = "from-guardian-600",
  gradientTo = "to-guardian-800",
  hoverFrom = "hover:from-guardian-700",
  hoverTo = "hover:to-guardian-900",
  className,
  children,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]',
    className
  );

  if (variant === 'default') {
    return (
      <Button
        className={cn(
          baseClasses,
          `bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:bg-gradient-to-r ${hoverFrom} ${hoverTo} text-white shadow-md`
        )}
        size={size}
        {...props}
      >
        <span className="z-10 relative">{children}</span>
      </Button>
    );
  }

  if (variant === 'outline') {
    return (
      <Button
        variant="outline"
        className={cn(
          baseClasses,
          'border-2 border-guardian-500/50 text-guardian-700 hover:text-guardian-800 hover:border-guardian-600 bg-white/5 backdrop-blur-sm'
        )}
        size={size}
        {...props}
      >
        {children}
      </Button>
    );
  }

  // Ghost variant
  return (
    <Button
      variant="ghost"
      className={cn(
        baseClasses,
        'text-guardian-700 hover:text-guardian-800 hover:bg-guardian-100/50'
      )}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
