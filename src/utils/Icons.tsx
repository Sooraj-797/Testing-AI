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

export const AgentPersonaIcon: React.FC<IconProps> = ({ size = 28, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export const UploadIcon: React.FC<IconProps> = ({ size = 16, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ ...style, color: 'white' }}
  >
    <path d="M12 16V5" />
    <polyline points="6 9 12 3 18 9" />
    <path d="M5 16v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
  </svg>
);

export const AddIcon: React.FC<IconProps> = ({ size = 16, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ ...style, color: 'white' }}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const ChartColumnIcon: React.FC<IconProps> = ({ size = 24, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cf17b9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column-icon lucide-chart-column">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>  
);

export const BenchmarkIcon: React.FC<IconProps> = ({ size = 28, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 64 64" style={style} fill="none">
    {/* Base */}
    <rect x="8" y="40" width="48" height="8" rx="2" fill="#6366F1" />
    
    {/* Columns/Bars */}
    <rect x="14" y="20" width="8" height="20" fill="#818CF8" />
    <rect x="28" y="12" width="8" height="28" fill="#A5B4FC" />
    <rect x="42" y="24" width="8" height="16" fill="#C7D2FE" />
    
    {/* Speed indicator */}
    <circle cx="42" cy="16" r="6" fill="#F472B6" />
    <path d="M42 12v8M38 16h8" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);