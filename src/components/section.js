import React from 'react'
import styled from 'styled-components'
import { dark } from '../styles/Colors';


const StyledSection = styled.div`
    background: ${props=>props.color};
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 72px;
        color: white;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


const Section = ({color, title, args}) => {
    return(
        <StyledSection color={color}>
            <h1> {title} </h1>
            <Content>
                {args}
            </Content>
        </StyledSection>
    )
}
export default Section