"use client";

import React, { useState, ReactNode, isValidElement } from 'react';

interface TabsProps {
  tabs: { value: string; label: string; icon?: ReactNode }[];
  children: ReactNode;
}

interface TabContentProps {
  value: string;
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="flex bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === tab.value
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {React.Children.map(children, (child) => {
          if (isValidElement<TabContentProps>(child) && child.props.value === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const TabContent: React.FC<TabContentProps> = ({ children }) => {
  return <div>{children}</div>;
};