import React from 'react';

interface HopeLogoProps {
  variant?: 'full' | 'badge' | 'icon' | 'header';
  className?: string;
  theme?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const HopeLogo: React.FC<HopeLogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const isGold = theme === 'gold';

  const strokeColor = isGold ? '#B69771' : isDark ? '#FFFFFF' : '#1A1918';
  const textColor = isGold ? '#B69771' : isDark ? '#FFFFFF' : '#1A1918';
  const subtextColor = isGold ? '#8C704D' : isDark ? '#A8A29E' : '#78716C';

  // Infinity Loop Symbol SVG path
  const InfinityIcon = ({ width = 48, height = 24 }: { width?: number; height?: number }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block transition-transform duration-300"
    >
      {/* Upper broken arc dashes */}
      <path
        d="M 38 10 C 44 10 47 18 50 24 C 53 18 56 10 62 10"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
      />
      {/* Primary elegant Infinity loop path */}
      <path
        d="M 50 24 
           C 42 12, 16 12, 16 26 
           C 16 38, 42 38, 50 24 
           C 58 12, 84 12, 84 26 
           C 84 38, 58 38, 50 24 Z"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'badge') {
    return (
      <div
        className={`relative flex flex-col items-center justify-center rounded-full bg-[#B69771] text-white shadow-xl shadow-[#B69771]/20 ${
          size === 'xl'
            ? 'w-48 h-48 md:w-56 md:h-56'
            : size === 'lg'
            ? 'w-36 h-36'
            : size === 'md'
            ? 'w-24 h-24'
            : 'w-16 h-16'
        } ${className}`}
      >
        <svg
          viewBox="0 0 120 120"
          className="w-4/5 h-4/5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer dashed orbit */}
          <circle
            cx="60"
            cy="52"
            r="38"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2.5"
            strokeDasharray="8 8"
          />
          {/* White Infinity Symbol */}
          <path
            d="M 60 52 
               C 52 40, 28 40, 28 54 
               C 28 66, 52 66, 60 52 
               C 68 40, 92 40, 92 54 
               C 92 66, 68 66, 60 52 Z"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* HOPE Wordmark */}
          <text
            x="60"
            y="94"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="19"
            letterSpacing="3"
          >
            HOPE
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="flex flex-col items-center">
          <InfinityIcon width={32} height={16} />
          <span
            className="text-[11px] font-black tracking-[0.22em] leading-none mt-1 font-latin uppercase"
            style={{ color: textColor }}
          >
            HOPE
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'icon') {
    return <InfinityIcon width={size === 'lg' ? 64 : size === 'sm' ? 28 : 42} height={size === 'lg' ? 32 : size === 'sm' ? 14 : 21} />;
  }

  // Full lockup
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      <InfinityIcon width={size === 'lg' ? 68 : size === 'sm' ? 36 : 52} height={size === 'lg' ? 34 : size === 'sm' ? 18 : 26} />
      <span
        className="font-black tracking-[0.24em] font-latin uppercase mt-1.5"
        style={{
          color: textColor,
          fontSize: size === 'lg' ? '24px' : size === 'sm' ? '14px' : '18px',
          lineHeight: '1.1'
        }}
      >
        HOPE
      </span>
      <span
        className="text-[10px] tracking-[0.16em] font-medium font-latin mt-0.5"
        style={{ color: subtextColor }}
      >
        — Café & Bakery —
      </span>
    </div>
  );
};
