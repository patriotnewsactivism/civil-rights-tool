import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CircuitAnalysisChart = ({ circuitData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!circuitData || !chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    
    // Sample data structure for visualization
    const circuitNames = [
      '1st Circuit', '2nd Circuit', '3rd Circuit', '4th Circuit',
      '5th Circuit', '6th Circuit', '7th Circuit', '8th Circuit',
      '9th Circuit', '10th Circuit', '11th Circuit', 'D.C. Circuit'
    ];
    
    // Constitutional protection scores (higher is more protective)
    const protectionScores = [
      85, 80, 65, 85,
      30, 60, 65, 60,
      90, 65, 60, 70
    ];
    
    // Section 1983 success rates (percentage)
    const section1983Rates = [
      65, 70, 55, 75,
      25, 50, 55, 50,
      80, 55, 50, 60
    ];
    
    // Create gradient for bars
    const getGradient = (ctx, score) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      if (score < 40) {
        // Red gradient for hostile circuits
        gradient.addColorStop(0, 'rgba(239, 68, 68, 0.8)');
        gradient.addColorStop(1, 'rgba(127, 29, 29, 0.8)');
      } else if (score < 70) {
        // Yellow gradient for moderate circuits
        gradient.addColorStop(0, 'rgba(245, 158, 11, 0.8)');
        gradient.addColorStop(1, 'rgba(146, 64, 14, 0.8)');
      } else {
        // Green gradient for protective circuits
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.8)');
        gradient.addColorStop(1, 'rgba(6, 95, 70, 0.8)');
      }
      return gradient;
    };
    
    // Create chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: circuitNames,
        datasets: [
          {
            label: 'Constitutional Protection Score',
            data: protectionScores,
            backgroundColor: function(context) {
              const index = context.dataIndex;
              const value = context.dataset.data[index];
              const ctx = context.chart.ctx;
              return getGradient(ctx, value);
            },
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1
          },
          {
            label: 'Section 1983 Success Rate (%)',
            data: section1983Rates,
            type: 'line',
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)'
            },
            title: {
              display: true,
              text: 'Constitutional Protection Score',
              color: 'rgba(255, 255, 255, 0.7)'
            }
          },
          y1: {
            beginAtZero: true,
            max: 100,
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: 'rgba(59, 130, 246, 0.7)'
            },
            title: {
              display: true,
              text: 'Section 1983 Success Rate (%)',
              color: 'rgba(59, 130, 246, 0.7)'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              maxRotation: 45,
              minRotation: 45
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'rgba(255, 255, 255, 0.7)'
            }
          },
          tooltip: {
            callbacks: {
              afterBody: function(tooltipItems) {
                const index = tooltipItems[0].dataIndex;
                const circuit = circuitNames[index];
                
                // Add additional information based on circuit
                if (circuit === '5th Circuit') {
                  return ['WARNING: Extremely hostile to civil rights claims', 'Highest qualified immunity grant rate'];
                } else if (circuit === '9th Circuit') {
                  return ['Most protective of constitutional rights', 'Lowest qualified immunity grant rate'];
                } else if (circuit === '4th Circuit') {
                  return ['Strong protections for digital privacy', 'Restrictive on police stops'];
                }
                return [];
              }
            }
          }
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [circuitData]);

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-4">
      <h3 className="text-lg font-medium text-white mb-4">Circuit Court Constitutional Analysis</h3>
      <div className="h-80">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Data represents constitutional protection scores and Section 1983 success rates across federal circuits.
      </div>
    </div>
  );
};

export default CircuitAnalysisChart;