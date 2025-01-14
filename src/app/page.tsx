import { Hero } from './components/Hero';
import { Tabs, TabContent } from './components/Tabs';
import { OverviewContent } from './components/OverviewContent';
import { ExpertiseContent } from './components/ExpertiseContent';
import { Projects } from './components/Projects';
import { ImpactContent } from './components/ImpactContent';
import { Brain, Code, Rocket, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="p-8">
        {/* Hero Section */}
        <Hero />

        {/* Tabbed Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs
            tabs={[
              { value: 'overview', label: 'Overview', icon: <Brain className="w-4 h-4" /> },
              { value: 'expertise', label: 'Expertise', icon: <Code className="w-4 h-4" /> },
              { value: 'projects', label: 'Projects', icon: <Rocket className="w-4 h-4" /> },
              { value: 'impact', label: 'Impact', icon: <Users className="w-4 h-4" /> },
            ]}
          >
            <TabContent value="overview">
              <OverviewContent />
            </TabContent>

            <TabContent value="expertise">
              <ExpertiseContent />
            </TabContent>

            <TabContent value="projects">
              <Projects />
            </TabContent>

            <TabContent value="impact">
              <ImpactContent />
            </TabContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}