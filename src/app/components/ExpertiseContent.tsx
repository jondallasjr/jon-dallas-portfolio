"use client";

import { Card } from './Card';
import { Badge } from './Badge';

export const ExpertiseContent = () => {
  return (
    <Card>
      <h3 className="heading">Core Technologies</h3>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Badge>AI/ML</Badge>
          <span className="body-text">OpenAI & Anthropic API Integration, Vision AI, Advanced Prompt Engineering</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge>Low-Code</Badge>
          <span className="body-text">Coda.io (Expert), Custom Pack Development, Complex Formula Engineering</span>
        </li>
        <li className="flex items-center gap-2">
          <Badge>Web Development</Badge>
          <span className="body-text">React, TypeScript, API Integration, Chrome Extensions</span>
        </li>
      </ul>
    </Card>
  );
};