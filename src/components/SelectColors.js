import React from 'react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '64px',
              height: '64px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
