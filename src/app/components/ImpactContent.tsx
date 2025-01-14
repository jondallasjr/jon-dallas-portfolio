"use client";

import { Card } from './Card';
import { LineChartComponent } from './LineChart';

const stats = [
  { name: 'Resume Rewrite Cost', before: 240, after: 30 },
  { name: 'Property Description Time', before: 60, after: 10 },
  { name: 'SEO Traffic Increase', before: 100, after: 110.5 },
];

export const ImpactContent = () => {
  return (
    <Card>
      <h3 className="heading">Business Impact Metrics</h3>
      <LineChartComponent data={stats} />
    </Card>
  );
};