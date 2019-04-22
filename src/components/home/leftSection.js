import React from 'react';
import styled from 'styled-components';
import { gray, dark } from '../../styles/colors';



const StyledSection = styled.div`
    background: white; 
    padding: 7rem;
    img{
        width: 90%;
        margin-top: -2rem;
    }
    h1{
        width: 50%;
        margin-top: 2rem;
        margin-bottom: 1.6rem;
        color: ${dark};
        font-size: 4.5rem;
        font-weight: bold
    }
    @media (max-width: 35em) {
        flex-direction: column;
        text-align: center;
        padding: 3rem;
        h1{
            width: 100%;
            margin-left: 0;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -12rem;
    @media (max-width: 35em) {
        flex-direction: column-reverse;
        margin-top: 0rem;
    }
`;

const StyledImg = styled.div`
    margin-top: 40px;
    padding: 8px;
    width: 50%;
    @media (max-width: 35em) {
        width: 100%;
    }
`;

const StyledContent = styled.div`
    width: 50%;
    padding: 16px;
    padding-right: 0;
    p{  
        width:90%;
        margin-bottom: 16px;
        margin-left: -1rem;
        margin-top: 10rem;
        color: ${gray};
        font-size: 2.4rem;
        line-height: 1.2;
    }
    @media (max-width: 35em) {
        width: 100%;
        p{
            width: 100%;
            margin-top: 0rem;
        }
    }
`;

const LeftSection = ({title, text, picture}) => (
    <StyledSection>
        <h1> {title} </h1>
        <Content>
            <StyledContent>
                <p> {text} </p>
            </StyledContent>
            <StyledImg>
                <img src={picture} alt="cartoon" />
            </StyledImg>
        </Content>
    </StyledSection>
);

export default LeftSection;
