// src/Icons.js

import React from 'react';

// Card type/category icons
export const CardIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 9H2V7H22V9ZM22 11H2V13H22V11ZM2 17H12V15H2V17Z" fill={color} />
    <path d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 19H4V5H20V19Z" fill={color} />
  </svg>
);

export const RampIcon = ({ size = 24, color = '#88cc00', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17 6H7V8H17V6ZM17 10H7V12H17V10ZM7 16H14V14H7V16ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill={color} />
    <path d="M18 15L21 18H15L18 15Z" fill={color} />
  </svg>
);

export const DrawIcon = ({ size = 24, color = '#00ccff', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H14V14H10V12ZM10 6H18V8H10V6Z" fill={color} />
  </svg>
);

export const CounterIcon = ({ size = 24, color = '#eb5c5c', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill={color} />
    <path d="M13 17H11V19H13V17Z" fill={color} />
  </svg>
);

export const CreatureIcon = ({ size = 24, color = '#88cc00', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13ZM18 18H6V17.01C6.2 16.29 9.3 15 12 15C14.7 15 17.8 16.29 18 17V18Z" fill={color} />
  </svg>
);

export const InteractionIcon = ({ size = 24, color = '#ddb8ff', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 5H9V7H7V5ZM7 13H9V11H7V13ZM7 21H9V19H7V21ZM11 17H13V15H11V17ZM11 9H13V7H11V9ZM3 21H5V3H3V21ZM15 21H17V19H15V21ZM19 13H21V11H19V13ZM19 21H21V19H19V21ZM19 5H21V3H19V5ZM11 13H13V11H11V13ZM19 9H21V7H19V9ZM11 5H13V3H11V5ZM11 21H13V19H11V21ZM15 13H17V11H15V13ZM15 5H17V3H15V5Z" fill={color} />
  </svg>
);

export const FinisherIcon = ({ size = 24, color = '#ffcb7d', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2ZM17.24 17.98L12 15.67L6.76 17.98L12 4.94L17.24 17.98Z" fill={color} />
  </svg>
);

// Variant-specific icons
export const EmrakulIcon = ({ size = 24, color = '#e89aff', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L6.5 12L12 22L17.5 12L12 2ZM10 7.67L8.09 11H10V7.67ZM12 16.11L11.42 15H12.58L12 16.11ZM14 11H15.91L14 7.67V11ZM14 15.45L15.83 12H14V15.45ZM10 15.45V12H8.17L10 15.45Z" fill={color} />
    <path d="M20 10.11L17 13.11L20 16.11L23 13.11L20 10.11ZM4 10.11L1 13.11L4 16.11L7 13.11L4 10.11Z" fill={color} />
  </svg>
);

export const DarksteelIcon = ({ size = 24, color = '#c7c7c7', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2L4 12L12 22L20 12L12 2ZM12 17L7 12L12 7L17 12L12 17Z" fill={color} />
    <path d="M12 9L10 12L12 15L14 12L12 9Z" fill={color} />
  </svg>
);

// Navigation icons
export const HomeIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill={color} />
  </svg>
);

export const StrategyIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill={color} />
    <path d="M7 12H9V17H7V12ZM15 7H17V17H15V7ZM11 14H13V17H11V14ZM11 10H13V12H11V10Z" fill={color} />
  </svg>
);

export const MulliganIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" fill={color} />
  </svg>
);

export const CardsIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 3H21V5H3V3ZM3 7H15V9H3V7ZM3 11H21V13H3V11ZM3 15H15V17H3V15ZM3 19H21V21H3V19Z" fill={color} />
  </svg>
);

export const CompareIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z" fill={color} />
  </svg>
);

export const MenuIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={color} />
  </svg>
);

export const CloseIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill={color} />
  </svg>
);