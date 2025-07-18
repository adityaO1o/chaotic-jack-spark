import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ValueCard = ({ title, description, icon }: ValueCardProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
    <div className="flex items-center mb-4">
      <div className="mr-4">{icon}</div>
      <h3 className="text-xl font-bold font-syne">{title}</h3>
    </div>
    <p className="text-gray-600 font-kanit leading-relaxed">{description}</p>
  </div>
);

export default ValueCard;