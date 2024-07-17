import React from 'react';

const ProgressBar = ({ progress, maxValue = 100 }) => {
  // Calculate width of the filled part
  const filledWidth = Math.min((progress / maxValue) * 100, 100);

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0de', borderRadius: '8px' }}>
      <div
        style={{
          width: `${filledWidth}%`,
          backgroundColor: 'green',
          height: '20px',
          borderRadius: '8px',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default ProgressBar;