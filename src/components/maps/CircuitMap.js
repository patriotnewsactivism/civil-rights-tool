import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

/**
 * Interactive Federal Circuit Map Component
 * 
 * Displays a map of the United States with federal circuits color-coded
 * and interactive hover/click features
 */
const CircuitMap = ({ federalCircuits, onStateSelect }) => {
  const [statesGeoJson, setStatesGeoJson] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Load GeoJSON data for US states
  useEffect(() => {
    // This would normally fetch from a real GeoJSON file
    // For this example, we'll create a simplified version
    const fetchGeoJson = async () => {
      try {
        // In a real implementation, we would fetch the actual GeoJSON data
        // For now, we'll use a placeholder that would be replaced with actual data
        const response = await fetch('https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json');
        const data = await response.json();
        setStatesGeoJson(data);
        setMapLoaded(true);
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
        // Fallback to indicate map couldn't be loaded
        setMapLoaded(false);
      }
    };
    
    fetchGeoJson();
  }, []);
  
  // Get circuit color based on hostility level
  const getCircuitColor = (stateCode) => {
    if (!federalCircuits[stateCode]) return '#CCCCCC'; // Default gray for unknown
    
    const hostility = federalCircuits[stateCode].hostility;
    switch (hostility) {
      case 'EXTREMELY HOSTILE':
        return '#FF4136'; // Red
      case 'Hostile':
        return '#FF851B'; // Orange
      case 'Moderate':
        return '#FFDC00'; // Yellow
      case 'Protective':
        return '#2ECC40'; // Green
      default:
        return '#CCCCCC'; // Gray
    }
  };
  
  // Style function for GeoJSON features
  const styleFeature = (feature) => {
    const stateCode = feature.properties.STATE_ABBR || feature.properties.STUSPS;
    return {
      fillColor: getCircuitColor(stateCode),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };
  
  // Event handlers for GeoJSON features
  const onEachFeature = (feature, layer) => {
    const stateCode = feature.properties.STATE_ABBR || feature.properties.STUSPS;
    const stateName = feature.properties.NAME;
    
    if (federalCircuits[stateCode]) {
      const circuitInfo = federalCircuits[stateCode];
      
      // Add tooltip
      layer.bindTooltip(`
        <strong>${stateName}</strong><br/>
        Circuit: ${circuitInfo.circuit}<br/>
        Hostility: ${circuitInfo.hostility}
      `);
      
      // Add click handler
      layer.on({
        click: () => {
          setSelectedState(stateCode);
          if (onStateSelect) {
            onStateSelect(stateCode);
          }
        },
        mouseover: (e) => {
          const layer = e.target;
          layer.setStyle({
            weight: 2,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.9
          });
        },
        mouseout: (e) => {
          const layer = e.target;
          layer.setStyle(styleFeature(feature));
        }
      });
    }
  };
  
  // If map data hasn't loaded yet, show loading state
  if (!mapLoaded) {
    return (
      <Card title="Federal Circuit Map" className="h-96">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading map data...</p>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card title="Federal Circuit Map" className="h-[600px]">
        {statesGeoJson && (
          <div className="h-full w-full">
            <MapContainer
              center={[39.8283, -98.5795]} // Center of US
              zoom={4}
              style={{ height: '100%', width: '100%' }}
              zoomControl={true}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                data={statesGeoJson}
                style={styleFeature}
                onEachFeature={onEachFeature}
              />
            </MapContainer>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-600 mr-2"></div>
                <span className="text-sm">Extremely Hostile</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 mr-2"></div>
                <span className="text-sm">Hostile</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
                <span className="text-sm">Moderate</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 mr-2"></div>
                <span className="text-sm">Protective</span>
              </div>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default CircuitMap;