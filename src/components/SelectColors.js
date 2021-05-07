import React, {Component} from 'react';
//import {ColorConsumer} from '../contexts/color';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };

    handleSetSubcolor = color => {
        this.context.actions.setSubcolor(color);
    };

    render() {
        return (
            <div>
                <h2>Select a color🎨</h2>
                <div style={{display: 'flex'}}>
                    {colors.map(color => (
                        <div key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                        onClick={() => this.handleSetColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            this.handleSetSubcolor(color)
                        }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>Select one color🎨</h2>
//             <ColorConsumer>
//                 {({actions}) =>(
//                     <div style={{display: 'flex'}}>
//                         {colors.map(color => (
//                             <div key={color}
//                                 style={{
//                                     background: color,
//                                     width: '24px',
//                                     height: '24px',
//                                     cursor: 'pointer'
//                                 }}
//                                 onClick={() => actions.setColor(color)}
//                                 onContextMenu={e => {
//                                     e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 방지
//                                     actions.setSubcolor(color);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr/>
//         </div>
//     );
//}

export default SelectColors;