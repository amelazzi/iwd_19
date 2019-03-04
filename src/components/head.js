import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { blue, dark } from "../styles/colors";


const StyledHead = styled.div`
    background-image: url(${props=>props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    height: 61vh;
    padding : 14rem 4rem;
    @media (max-width: 35em) {
        height: 100vh;
        padding : 8rem 4rem;
    }
`;

const HeadContent = styled.div`
    h1{
        width: 80%;
        font-size: 7.5rem;
        font-weight: bold;
    }
    h2{
        color: ${blue};
        font-size: 2.8rem;
    }
    p{
        width: 44%;
        color: ${dark};
        padding: 2rem 0rem;
        padding-bottom: 5rem;
        font-size: 2.6rem;
        line-height: 1.6;
    }
    @media (max-width: 35em) {
        h1{
            width: 100%;
            font-size: 5rem;
        }
        p{
            width: 100%;
            padding: 0 !important;
            font-size: 2rem;
        }
    }
`;

const StyledLink = styled(Link)`
    border-radius: 1.6rem;
    padding: 2rem 4rem;
    background: ${blue};
    color: white;
    font-size: 2.6rem;
    text-decoration: none;
    :hover{
        text-decoration: none;
        color: white;
    }
    @media (max-width: 35em) {
       margin-left: 25%;
    }
`;

const Head = ({background, title, subtitle, text}) => {
    return (
        <StyledHead background={background}>
            <HeadContent>
                <h1> {title} </h1>
                <h2> {subtitle} </h2>
                <p> {text} </p>
                <StyledLink to="/register"> Apply Now </StyledLink>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
