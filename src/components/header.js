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
        padding: 25px;
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
    flex: 1;
    a {
        font-weight: bolder;
        font-size: 20px;
        &:after {
            display: none !important;
        }
    }
`;

const StyledLogIn = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    background: ${darkGreen};
    width: 20.5%;
    padding: 25px;
    font-weight: bold;
`;

const LogIn = styled(Link)`
    :after {
        background: white !important;
    }
`;

const StyledLink = styled.div`
    background: ${dark};
    border-radius: 8px;
`;

const SignIn = styled(Link)`
    :after {
        bottom: -16px !important;
        background: white !important;
    }
`;

const Header = () => (
    <StyledHeader>
        <nav>
            <StyledLogo>
                <Link to="/">Blab</Link>
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
