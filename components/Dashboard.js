'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tag } from 'lucide-react';

const mockData = [
  { name: 'Simple Labs', count: 3 },
  { name: 'Medium Labs', count: 2 },
  { name: 'Complex Labs', count: 1 },
];

const LabCard = ({ title, description, resources, goal, testScenarios, tags }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
    <p className="mb-2"><strong>Description:</strong> {description}</p>
    <p className="mb-2"><strong>Resources:</strong> {resources.join(', ')}</p>
    <p className="mb-2"><strong>Goal:</strong> {goal}</p>
    <div>
      <strong>Test Scenarios:</strong>
      <ul className="list-disc pl-5 mt-2">
        {testScenarios.map((scenario, index) => (
          <li key={index}>{scenario}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const labs = [
    {
      title: "Simple VPC Setup",
      description: "Basic VPC with a single EC2 instance",
      resources: ["VPC", "EC2", "Security Group"],
      goal: "Learn basic VPC configuration",
      testScenarios: [
        "Verify EC2 instance can access internet",
        "Ensure security group blocks unauthorized access"
      ],
      tags: ["VPC", "EC2", "Simple"]
    },
    {
      title: "Multi-Account VPC Peering",
      description: "VPC peering between two AWS accounts",
      resources: ["VPC", "VPC Peering", "Route Tables"],
      goal: "Understand cross-account networking",
      testScenarios: [
        "Confirm communication between VPCs",
        "Verify proper route table configuration"
      ],
      tags: ["VPC", "Peering", "Complex"]
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AWS Lab Tracker</h1>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'labs' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('labs')}
        >
          Labs
        </button>
      </div>
      {activeTab === 'overview' ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Lab Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        labs.map((lab, index) => (
          <LabCard key={index} {...lab} />
        ))
      )}
    </div>
  );
};

export default Dashboard;