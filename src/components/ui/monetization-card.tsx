import React from 'react';

interface MonetizationCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  onButtonClick: () => void;
}

const MonetizationCard: React.FC<MonetizationCardProps> = ({
  title,
  description,
  features,
  price,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">{feature}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">{price}</span>
        <button 
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MonetizationCard;