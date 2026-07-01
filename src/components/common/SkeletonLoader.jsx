import React from 'react';

export default function SkeletonLoader({ height = '300px', borderRadius = '12px' }) {
  return (
    <div 
      style={{ 
        width: '100%', 
        height, 
        borderRadius, 
        background: 'linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite linear'
      }} 
    />
  );
}
