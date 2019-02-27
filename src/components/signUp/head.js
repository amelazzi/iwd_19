import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { blue, dark } from "../../styles/colors";

const background=require("../../images/signUp/background.png")

const StyledHead = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    height: 62vh;
    padding : 14rem 4rem;
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
`;


const Head = () => {
    return (
        <StyledHead>
            <HeadContent>
                <h1> Registrations </h1>
                <p> You want to participate? Just fill the form below </p>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
