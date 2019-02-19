import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { blue, dark } from "../../styles/Colors";


const StyledHead = styled.div`
    padding : 40px;
`;

const HeadContent = styled.div`
    padding: 120px  10px;
    h1{
        color: ${dark};
        font-size: 96px;
        font-weight: bold;
    }
    h2{
        color: ${blue};
        font-size: 28pt;
    }
    p{
        color: ${dark};
        padding: 20px 0px 50px 0px;
        font-size: 28px;
        line-height: 1;
    }
`;

const StyledLink = styled(Link)`
    border-radius: 16px;
    padding: 20px 40px;
    background: ${blue};
    color: white;
    font-size: 26px;
    text-decoration: none;
    :hover{
        text-decoration: none;
        color: white;
    }
`;

const Head = () => {
    return (
        <StyledHead>
            <HeadContent>
                <h1> IWD’19 Algiers </h1>
                <h2> Marsh, 9th 2019 </h2>
                <p> Higher National School of Computer Science - ESI ex INI - </p>
                <StyledLink to="/"> Get Started </StyledLink>
            </HeadContent>
        </StyledHead>
    );
};

export default Head;
