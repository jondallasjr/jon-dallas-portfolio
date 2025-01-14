"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: { name: string; before: number; after: number }[];
}

export const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="before" stroke="#ff0000" name="Before" />
          <Line type="monotone" dataKey="after" stroke="#00ff00" name="After" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};