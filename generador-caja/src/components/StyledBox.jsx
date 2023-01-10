import styled from 'styled-components';

const StyledBox = styled.div`
    border: 1px solid lightgray;
    display: inline-block;
    margin: 0 1vw 0 0;
    background: ${props => props.bgColor};
    width: ${props => props.size !== '' ? props.size+'px' : '100px'};
    height: ${props => props.size !== '' ? props.size+'px' : '100px'};
`;

export default StyledBox;