import React, { Component } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
  // this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.
  static contextType = ColorContext;

  handleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (color) => {
    this.context.actions.setSubcolor(color);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <ColorConsumer>
          {({ actions }) => (
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
                  onClick={() => this.handleSetColor(color)}
                  onContextMenu={(e) => {
                    e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                    this.handleSetSubcolor(color);
                  }}
                />
              ))}
            </div>
          )}
        </ColorConsumer>
        <hr />
      </div>
    );
  }
}

export default SelectColors;
