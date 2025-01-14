"use client";

import { Card } from './Card';
import { Badge } from './Badge';

export const OverviewContent = () => {
  return (
    <Card>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Badge>AI Integration</Badge>
              <span className="text-gray-800">Custom AI solutions that automate complex tasks</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge>Low-Code Development</Badge>
              <span className="text-gray-800">Rapid deployment of sophisticated business tools</span>
            </li>
            <li className="flex items-center gap-2">
              <Badge>Process Optimization</Badge>
              <span className="text-gray-800">Streamline operations with intelligent automation</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Metrics</h3>
          <ul className="space-y-2 text-gray-800">
            <li>• 87% cost reduction in resume processing</li>
            <li>• 80% time savings in property descriptions</li>
            <li>• 10.5% increase in SEO traffic</li>
            <li>• 17,000+ invocations of ChatGPT Vision Pack</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};