import React from 'react';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* 비구조화 할당 */}
      {({ state }) => (
        <>
          <div
            style={{
              width: '128px',
              height: '128px',
              background: state.color,
            }}
          />
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
