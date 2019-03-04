import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { dark, darkBlue, darkGreen } from '../styles/colors';

const MenuIcon = styled.img`
    display: none;
    width: 3rem;
    height: 2.5rem;
    margin-top: 0.5rem !important;
    margin-right: 3rem !important;
    :hover{
        cursor: pointer;
    }
    @media (max-width: 35em) {
		display: block;
    }
`;


const StyledHeader = styled.header`
    background: ${dark};
    width: 100%;
    font-size: 1.6rem;
    margin: 0;
    display: flex;
    position: fixed;
    justify-content: space-between;
    box-shadow: 0 5px 5px -5px #333;
    z-index: 2;
    * {
        margin: 0;
    }
    @media (max-width: 35em) {
        flex-direction: column;
        justify-content: center;
    }

    nav {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        @media (max-width: 35em) {
            background: ${dark};
            flex-direction: column;
            justify-content: center;
        }
    }

    .highlight {
        color: black;
        background-color: white
    }

    a {
        color: white;
        padding: 1rem 2.5rem;
        position: relative;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 2px;
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
    margin: 1.5rem 0rem;
    padding: 0;
    display: flex;
    justify-content: space-between;
`;

const StyledMenu = styled.div`
    display: flex;
    @media (max-width: 35em) {
        flex-direction: column;
        display: none;
    }
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
    padding: 1.5rem;
    padding-right: 3rem;
    font-weight: bold;
    @media (max-width: 35em) {
        flex-direction: column;
        text-align: center;
        padding: 1.5rem 19rem;
    }
`;

const LogIn = styled(Link)`
    :after {
        background: white !important;
        bottom: 0.2rem  !important;
    }
`;

const StyledLink = styled.div`
    background: ${dark};
    padding: 1rem 0.2rem;
    border-radius: 8px;

    &:hover{
    background: white;
    a{
        color:${dark};
    }

    }

    a {
        &::after {
            background: transparent!important;
        }
    }

    &.highlight {
    background: white;
    a {
        color:${dark};
    }
        
    }
`;

const SignIn = styled(Link)`
    :after {
        bottom: -1.6rem !important;
        background: white !important;
        width: 9.5rem !important;
        margin-left: -1.1rem;
    }
`;
/**
 * const currentLocation = localStorage.getItem('currentLocation')
const changeLocation = (location) => localStorage.setItem('currentLocation', location)
 */

const Header = ({location}) => { 
    console.log('alpha',location.pathname)
    return (
    <StyledHeader>
        <StyledLogo>
            <LogoContainer>
                <img src={require("../images/iwd.png")} />
            </LogoContainer>
            <MenuIcon src={require("../images/menu-icon.png")} onClick={menuToggle}/>
        </StyledLogo>
        <StyledMenu>
            <nav>
                <Link className={location.pathname === "/" && 'active'} to="/"> Home </Link>
                <Link className={location.pathname === "/about" && 'active'} to="/about"> About </Link>
                <Link className={location.pathname === "/contact-us" && 'active'} to="/contact-us"> Contact us </Link>
            </nav>
            <StyledLogIn>
                <LogIn className={location.pathname === "/agenda" && 'active'} to="/agenda"> Agenda </LogIn>
                <StyledLink className={location.pathname === "/register" && 'highlight'} >
                    <SignIn to="/register"> Register</SignIn>
                </StyledLink>
            </StyledLogIn>
        </StyledMenu>
    </StyledHeader>
);}


var bool = false;
function menuToggle(){
	if(!bool) {
        console.log("clicked");
        bool = true;
	}else{
        console.log("Not clicked");
		bool = false;
	}
}

export default Header;
