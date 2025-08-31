import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Card from '../ui/Card';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/**
 * Circuit Analysis Chart Component
 * 
 * Displays a bar chart showing the distribution of circuit court hostility levels
 */
const CircuitAnalysisChart = ({ federalCircuits }) => {
  // Process data for the chart
  const processChartData = () => {
    // Count states by hostility level
    const hostilityCounts = {
      'EXTREMELY HOSTILE': 0,
      'Hostile': 0,
      'Moderate': 0,
      'Protective': 0
    };
    
    // Count circuits by hostility level
    const circuitHostility = {};
    
    // Process each state
    Object.entries(federalCircuits).forEach(([stateCode, data]) => {
      const { circuit, hostility } = data;
      
      // Increment hostility count
      if (hostilityCounts.hasOwnProperty(hostility)) {
        hostilityCounts[hostility]++;
      }
      
      // Track circuit hostility
      if (!circuitHostility[circuit]) {
        circuitHostility[circuit] = hostility;
      }
    });
    
    // Count circuits by hostility
    const circuitCounts = {
      'EXTREMELY HOSTILE': 0,
      'Hostile': 0,
      'Moderate': 0,
      'Protective': 0
    };
    
    Object.values(circuitHostility).forEach(hostility => {
      if (circuitCounts.hasOwnProperty(hostility)) {
        circuitCounts[hostility]++;
      }
    });
    
    return {
      labels: ['Extremely Hostile', 'Hostile', 'Moderate', 'Protective'],
      datasets: [
        {
          label: 'States by Hostility Level',
          data: [
            hostilityCounts['EXTREMELY HOSTILE'],
            hostilityCounts['Hostile'],
            hostilityCounts['Moderate'],
            hostilityCounts['Protective']
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Circuits by Hostility Level',
          data: [
            circuitCounts['EXTREMELY HOSTILE'],
            circuitCounts['Hostile'],
            circuitCounts['Moderate'],
            circuitCounts['Protective']
          ],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    };
  };
  
  const chartData = processChartData();
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Circuit Court Hostility Analysis',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          title: (items) => items[0].label,
          label: (item) => `${item.dataset.label}: ${item.formattedValue}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        },
        ticks: {
          precision: 0
        }
      },
      x: {
        title: {
          display: true,
          text: 'Hostility Level'
        }
      }
    }
  };
  
  return (
    <Card title="Circuit Court Analysis" className="h-[400px]">
      <div className="h-full w-full">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </Card>
  );
};

export default CircuitAnalysisChart;