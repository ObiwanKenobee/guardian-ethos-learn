import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  gradientFrom?: string;
  gradientTo?: string;
  hoverFrom?: string;
  hoverTo?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
  external?: boolean;
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
  href,
  external = false,
  ...props
}) => {
  const baseClasses = cn(
    'relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]',
    className
  );

  const buttonContent = (
    <>
      <span className="z-10 relative">{children}</span>
    </>
  );

  // Button styles based on variant
  let buttonStyles = '';
  
  if (variant === 'default') {
    buttonStyles = `bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:bg-gradient-to-r ${hoverFrom} ${hoverTo} text-white shadow-md`;
  } else if (variant === 'outline') {
    buttonStyles = 'border-2 border-guardian-500/50 text-guardian-700 hover:text-guardian-800 hover:border-guardian-600 bg-white/5 backdrop-blur-sm';
  } else { // Ghost variant
    buttonStyles = 'text-guardian-700 hover:text-guardian-800 hover:bg-guardian-100/50';
  }

  // If href is provided, render as a Link
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            baseClasses,
            buttonStyles,
            "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
          )}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <Link
        to={href}
        className={cn(
          baseClasses,
          buttonStyles,
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium"
        )}
      >
        {buttonContent}
      </Link>
    );
  }

  // Otherwise render as a Button
  return (
    <Button
      className={cn(
        baseClasses,
        buttonStyles
      )}
      size={size}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

export default GradientButton;
