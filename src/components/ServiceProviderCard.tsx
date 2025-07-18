import React from 'react';

interface ServiceProviderCardProps {
  title: string;
}

export const ServiceProviderCard = ({ title }: ServiceProviderCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 text-center">
    <h4 className="font-syne font-semibold text-sm text-chaotic-blue">{title}</h4>
  </div>
);

export default ServiceProviderCard;