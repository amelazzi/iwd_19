import React from 'react'
import styled from 'styled-components'


const StyledSection = styled.div`
    background: ${props=>props.color};
    padding: 4.8rem;
    margin-top: -0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 7.2rem;
        color: white;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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