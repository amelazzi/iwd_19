import React from 'react';
import styled from 'styled-components';
import { gray, dark } from '../../styles/Colors';

const StyledSection = styled.div`
    background: white; 
    display: flex;
    flex-direction: row;
    align-items: center;   
    padding: 70px;
    img{
        width: 100%;
    }
`;

const StyledImg = styled.div`
    margin-top: 40px;
    padding: 8px;
    width: 50%;
`;

const StyledContent = styled.div`
    width: 50%;
    padding: 16px;
    padding-right: 0;
    h1{
        margin-top: 80px;
        margin-bottom: 16px;
        color: ${dark};
        font-size: 45px;
        font-weight: bold
    }
    p{  
        width:90%;
        margin-bottom: 16px;
        margin-left: 8px;
        color: ${gray};
        font-size: 28px;
        line-height: 1.2;
    }
`;

const LeftSection = ({title, text, picture}) => (
    <StyledSection>
        <StyledImg>
            <img src={picture} />
        </StyledImg>
        <StyledContent>
            <h1> {title} </h1>
            <p> {text} </p>
        </StyledContent>
    </StyledSection>
);

export default LeftSection;
