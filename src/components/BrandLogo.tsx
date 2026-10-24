import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBorder?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showBorder = true,
}) => {
  const [hasError, setHasError] = useState(false);

  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  const logoSrc = '/assets/aistudio/les_horizons_logo.png';

  return (
    <div
      className={`${dimensions} rounded-full ${
        showBorder ? 'p-0.5 bg-[#E4BC44] shadow-md' : ''
      } flex items-center justify-center shrink-0 overflow-hidden ${className}`}
    >
      {!hasError ? (
        <img
          src={logoSrc}
          alt="Les Horizons Consulting Logo"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-full bg-[#041C34]"
        />
      ) : (
        <div className="w-full h-full bg-[#041C34] rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 h-3/4 text-[#E4BC44]"
          >
            <path
              d="M12 9C16 7 24 7 28 9"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M14 13V27M26 13V27"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M14 20H26"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="11" r="1.5" fill="#E4BC44" />
            <circle cx="20" cy="29" r="1.5" fill="#E4BC44" />
          </svg>
        </div>
      )}
    </div>
  );
};
