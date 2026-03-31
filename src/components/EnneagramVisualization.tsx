import React from 'react';
import { Type } from '../types';

interface EnneagramVisualizationProps {
  type: Type;
}

const EnneagramVisualization: React.FC<EnneagramVisualizationProps> = ({ type }) => {
  const points = [
    { x: 50, y: 5 },   // 9
    { x: 78, y: 15 },  // 1
    { x: 95, y: 40 },  // 2
    { x: 95, y: 65 },  // 3
    { x: 78, y: 90 },  // 4
    { x: 50, y: 100 }, // 5
    { x: 22, y: 90 },  // 6
    { x: 5, y: 65 },   // 7
    { x: 5, y: 40 },   // 8
  ];

  // Map type number to index (1-9 -> 0-8)
  const getPoint = (num: number) => points[num === 9 ? 0 : num];

  const integrationPoint = getPoint(type.relationships.integration.type);
  const disintegrationPoint = getPoint(type.relationships.disintegration.type);
  const currentPoint = getPoint(type.number);

  return (
    <div className="w-full h-64 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-64 h-64">
        {/* Circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e5e5" strokeWidth="1" />
        
        {/* Triangle lines */}
        <line x1={getPoint(3).x} y1={getPoint(3).y} x2={getPoint(6).x} y2={getPoint(6).y} stroke="#5A5A40" strokeWidth="1" />
        <line x1={getPoint(6).x} y1={getPoint(6).y} x2={getPoint(9).x} y2={getPoint(9).y} stroke="#5A5A40" strokeWidth="1" />
        <line x1={getPoint(9).x} y1={getPoint(9).y} x2={getPoint(3).x} y2={getPoint(3).y} stroke="#5A5A40" strokeWidth="1" />

        {/* Integration line */}
        <line x1={currentPoint.x} y1={currentPoint.y} x2={integrationPoint.x} y2={integrationPoint.y} stroke="#10B981" strokeWidth="2" />
        
        {/* Disintegration line */}
        <line x1={currentPoint.x} y1={currentPoint.y} x2={disintegrationPoint.x} y2={disintegrationPoint.y} stroke="#EF4444" strokeWidth="2" />

        {/* Points */}
        {points.map((p, i) => {
          const num = i === 0 ? 9 : i;
          const isSelected = num === type.number;
          return (
            <circle 
              key={num} 
              cx={p.x} 
              cy={p.y} 
              r={isSelected ? 4 : 2} 
              fill={isSelected ? type.color : "#e5e5e5"} 
            />
          );
        })}
      </svg>
    </div>
  );
};

export default EnneagramVisualization;
