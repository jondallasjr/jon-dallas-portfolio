"use client";

import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
      {children}
    </span>
  );
};