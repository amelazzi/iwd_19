import React from "react"
import Modal from "styled-react-modal"

import styled from "styled-components"
import { Link } from "gatsby";
import { dark, blue } from "../styles/colors";

const MenuIcon = styled.img`
    display: none;
    width: 4rem;
    height: 2.5rem;
    :hover{
        cursor: pointer;
    }
    @media (max-width: 76.7em) {
		  display: block;
    }
`;

const StyledModal = Modal.styled`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${dark};
    padding: 2rem;
    padding-top: 4rem;
    opacity: ${props => props.opacity};

    img{
        margin-top: 1rem;
        width: 2.8rem;
        margin-left: 92%;
        :hover{
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: white !important;
    text-transform: uppercase;
    margin: 1.5rem 0rem !important;
    padding: 0 !important;
    font-weight: 500;
    :hover{
        color: ${blue} !important;
    }
`;

const HomeLink = styled(StyledLink)`
    margin-top: 4rem !important;
`;


class FancyModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      opacity: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.afterOpen = this.afterOpen.bind(this);
    this.beforeClose = this.beforeClose.bind(this);
  }

  toggleModal(e) {
    this.setState({ isOpen: !this.state.isOpen });
  }

  afterOpen() {
    setTimeout(() => {
      this.setState({ opacity: 1 });
    });
  }

  beforeClose() {
    return new Promise(resolve => {
      this.setState({ opacity: 0 });
      setTimeout(resolve, 200);
    });
  }

  render() {
    return (
      <>
        <MenuIcon src={require("../images/menu-icon.png")} onClick={this.toggleModal} alt="menu"/>
        <StyledModal
          isOpen={this.state.isOpen}
          afterOpen={this.afterOpen}
          beforeClose={this.beforeClose}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
          opacity={this.state.opacity}
          backgroundProps={{ opacity: this.state.opacity }}
        >
            <img src={require("../images/close-icon.png")} onClick={this.toggleModal} alt="close" />
          <HomeLink to='/'> Home </HomeLink>
          <StyledLink to='/about'> About </StyledLink>
          <StyledLink to='/contact-us'> Contact Us </StyledLink>
          <StyledLink to='/agenda'> Agenda </StyledLink>
          <StyledLink to='/register'> Register </StyledLink>
        </StyledModal>
      </>
    );
  }
}

export default FancyModalButton