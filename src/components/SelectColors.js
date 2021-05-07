import React from 'react';
import {ColorConsumer} from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
    return (
        <div>
            <h2>Select one color🎨</h2>
            <ColorConsumer>
                {({actions}) =>(
                    <div style={{display: 'flex'}}>
                        {colors.map(color => (
                            <div key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 방지
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    );
}

export default SelectColors;