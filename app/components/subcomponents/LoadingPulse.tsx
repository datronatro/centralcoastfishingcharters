import React from 'react';
import { useTheme } from 'next-themes';

interface LoadingPulseProps {
  color?: string;
  variant?: 'button' | 'adaptive' | 'custom';
}

const LoadingPulse: React.FC<LoadingPulseProps> = ({ 
  color,
  variant = 'button'
}) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  // Determine the background color based on variant and theme
  let bgColor: string;
  
  if (variant === 'button') {
    // In buttons, always use white
    bgColor = 'bg-white';
  } else if (variant === 'adaptive') {
    // For adaptive variant, use theme-aware color (inverse of background)
    bgColor = isDark ? 'bg-white' : 'bg-[var(--main)]';
  } else {
    // For custom variant, use the provided color or default to main var
    bgColor = color ? `bg-[${color}]` : 'bg-[var(--main)]';
  }

  return (
    <div className="inline-flex gap-1 items-center justify-center">
      <div
        className={`w-2 h-2 rounded-full animate-pulse-custom ${bgColor}`}
      />
      <div
        className={`w-2 h-2 rounded-full animate-pulse-custom mx-1 ${bgColor}`}
        style={{ animationDelay: '0.2s' }}
      />
      <div
        className={`w-2 h-2 rounded-full animate-pulse-custom ${bgColor}`}
        style={{ animationDelay: '0.4s' }}
      />
      <style jsx>{`
        @keyframes pulse-custom {
          0%, 100% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingPulse;