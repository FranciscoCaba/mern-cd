import React from 'react'
import StyledBox from './StyledBox';

function ColorBoxes(props) {
    const { colorBoxStyle } = props;
    return (
        <div>
            {
                colorBoxStyle.map( (style,i) => <StyledBox key={i} bgColor={style.color} size={style.size}/> )
            }
        </div>
    )
}

export default ColorBoxes