import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { dark, darkBlue, darkGreen } from '../styles/Colors';

const StyledHeader = styled.header`
    background: ${dark};
    font-size: 18px;
    width: 100%;
    margin: 0;
    display: flex;
    position: fixed;
    justify-content: space-between;
    box-shadow: 0 5px 5px -5px #333;
    z-index: 2;
    * {
        margin: 0;
    }

    nav {
        width: 79%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        align-items: center;
    }

    a {
        color: white;
        padding: 0 20px;
        position: relative;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -5px;
                left: calc(3.2rem / 2);
                width: calc(100% - 3.2rem);
                height: 5px;
                background: ${darkBlue};
                border-radius: 10px;
            }
        }
    }
`;

const StyledLogo = styled.div`
    width: 66%;
    margin: 0;
    padding: 0;
`;

const LogoContainer = styled.div`
    width: 24rem;
    margin-left: 3.4rem;
    img{
        width: 100%;
        margin: 0;
        padding: 0;
        object-fit: cover;
    }
`;

const StyledLogIn = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    background: ${darkGreen};
    width: 20.5%;
    padding: 2.5rem 2rem;
    padding-right: 0;
    font-weight: bold;
`;

const LogIn = styled(Link)`
    margin-top: 0.7rem;
    :after {
        background: white !important;
        bottom: -0.2rem  !important;
    }
`;

const StyledLink = styled.div`
    background: ${dark};
    padding: 0.6rem 0.2rem;
    border-radius: 8px;
`;

const SignIn = styled(Link)`
    :after {
        bottom: -1.6rem !important;
        background: white !important;
        width: 9.5rem !important;
        margin-left: -1.1rem;
    }
`;

const Header = () => (
    <StyledHeader>
        <nav>
            <StyledLogo>
                <LogoContainer>
                    <img src={require("../images/iwd.png")} />
                </LogoContainer>
            </StyledLogo>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact-us"> Contact us </Link>
        </nav>
        <StyledLogIn>
            <LogIn to="/agenda"> Agenda </LogIn>
            <StyledLink>
                <SignIn to="/sign-up"> Sign up </SignIn>
            </StyledLink>
        </StyledLogIn>
    </StyledHeader>
);

export default Header;
