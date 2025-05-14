import React from "react";

interface IconProps {
    size?: number;
    style?: React.CSSProperties;
}

export const AgentsIcon: React.FC<IconProps> = ({ size = 28, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" style={style} fill="none">
      <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2Z" fill="#0f172a"/>
      <path d="M21 20c0-4.418 3.582-8 8-8s8 3.582 8 8v6c0 1.105.895 2 2 2s2 .895 2 2v6c0 1.105-.895 2-2 2s-2 .895-2 2v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V20Z" fill="#FB7185"/>
      <path d="M38 28h4a2 2 0 110 4h-4v-4ZM22 28h-4a2 2 0 100 4h4v-4ZM32 16a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2ZM32 48a2 2 0 012 2h2a2 2 0 010 4h-2a2 2 0 01-2-2v-4Z" fill="#38BDF8"/>
    </svg>
);

export const TruthLensIcon: React.FC<IconProps> = ({ size = 28, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" style={style}>
      {/* Cylinder */}
      <ellipse cx="32" cy="18" rx="14" ry="6" fill="#3B82F6" />
      <path d="M18 18v18c0 3.314 6.268 6 14 6s14-2.686 14-6V18" fill="#1D4ED8" />
      <ellipse cx="32" cy="36" rx="14" ry="6" fill="#60A5FA" />
  
      {/* Gear */}
      <g transform="translate(42, 40) scale(0.6)">
        <circle cx="10" cy="10" r="6" fill="#9CA3AF" />
        <path fill="#6B7280" d="M10 0v4M10 16v4M0 10h4M16 10h4M3.5 3.5l2.5 2.5M16.5 16.5l-2.5-2.5M3.5 16.5l2.5-2.5M16.5 3.5l-2.5 2.5" stroke="#6B7280" strokeWidth="1" />
      </g>
    </svg>
);

export const ScriptSmithIcon: React.FC<IconProps> = ({ size = 28, style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" style={style} fill="none">
      {/* Browser Frame */}
      <rect x="8" y="14" width="48" height="36" rx="4" fill="#374151" />
      <rect x="8" y="14" width="48" height="8" fill="#4B5563" />
      <circle cx="14" cy="18" r="2" fill="#EF4444" />
      <circle cx="20" cy="18" r="2" fill="#F59E0B" />
      <circle cx="26" cy="18" r="2" fill="#10B981" />
  
      {/* Code Brackets */}
      <path d="M28 32l-6 4v-8l6 4Zm8 0l6-4v8l-6-4Z" fill="#E5E7EB" />
    </svg>
);