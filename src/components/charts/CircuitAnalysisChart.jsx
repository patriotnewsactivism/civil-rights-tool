import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CircuitAnalysisChart = ({ circuitData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

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
    
    // Qualified immunity grant rates (percentage)
    const qualifiedImmunityRates = [
      35, 40, 55, 35,
      85, 60, 55, 60,
      30, 55, 60, 50
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
            borderWidth: 1,
            borderRadius: 6,
            barPercentage: 0.7,
            categoryPercentage: 0.8
          },
          {
            label: 'Section 1983 Success Rate (%)',
            data: section1983Rates,
            type: 'line',
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderWidth: 3,
            pointBackgroundColor: '#3b82f6',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.4,
            yAxisID: 'y1'
          },
          {
            label: 'Qualified Immunity Grant Rate (%)',
            data: qualifiedImmunityRates,
            type: 'line',
            borderColor: '#f43f5e',
            backgroundColor: 'rgba(244, 63, 94, 0.2)',
            borderWidth: 3,
            pointBackgroundColor: '#f43f5e',
            pointRadius: 4,
            pointHoverRadius: 6,
            borderDash: [5, 5],
            tension: 0.4,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: 'easeOutQuart'
        },
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
              color: 'rgba(255, 255, 255, 0.7)',
              font: {
                weight: 'bold'
              }
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
              text: 'Success/Grant Rate (%)',
              color: 'rgba(59, 130, 246, 0.7)',
              font: {
                weight: 'bold'
              }
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
              color: 'rgba(255, 255, 255, 0.7)',
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 20,
              font: {
                size: 12
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            padding: 12,
            cornerRadius: 8,
            boxPadding: 6,
            callbacks: {
              afterBody: function(tooltipItems) {
                const index = tooltipItems[0].dataIndex;
                const circuit = circuitNames[index];
                
                // Add additional information based on circuit
                if (circuit === '5th Circuit') {
                  return [
                    'WARNING: Extremely hostile to civil rights claims',
                    'Highest qualified immunity grant rate',
                    'Restrictive on First Amendment protections',
                    'Unfavorable to Section 1983 claims'
                  ];
                } else if (circuit === '9th Circuit') {
                  return [
                    'Most protective of constitutional rights',
                    'Lowest qualified immunity grant rate',
                    'Strong First Amendment protections',
                    'Favorable to Section 1983 claims'
                  ];
                } else if (circuit === '4th Circuit') {
                  return [
                    'Strong protections for digital privacy',
                    'Restrictive on police stops',
                    'Favorable to First Amendment claims',
                    'Moderate on qualified immunity'
                  ];
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
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-xl p-6 shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">Circuit Court Constitutional Analysis</h3>
      
      <div className="mb-4 text-white/80 text-sm">
        This chart compares how federal circuit courts handle civil rights cases, showing constitutional protection scores, Section 1983 success rates, and qualified immunity grant rates.
      </div>
      
      <div className="h-96 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
        <canvas ref={chartRef}></canvas>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
          <h4 className="text-lg font-semibold text-white mb-2">Constitutional Protection Score</h4>
          <p className="text-white/80 text-sm">
            Measures how strongly the circuit protects constitutional rights based on case outcomes. Higher scores indicate stronger protections.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
          <h4 className="text-lg font-semibold text-white mb-2">Section 1983 Success Rate</h4>
          <p className="text-white/80 text-sm">
            The percentage of civil rights lawsuits under 42 U.S.C. § 1983 that succeed in each circuit. Higher rates favor plaintiffs.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4">
          <h4 className="text-lg font-semibold text-white mb-2">Qualified Immunity Rate</h4>
          <p className="text-white/80 text-sm">
            How often the circuit grants qualified immunity to government officials. Higher rates favor defendants and make civil rights cases harder to win.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircuitAnalysisChart;