import React, {Component} from 'react'
import styled from 'styled-components'

import ReactCardFlip from 'react-card-flip';
import { dark, darkBlue } from '../../styles/colors';

/*const FrontComponent = styled.div`
    width: 22rem;
    height: 25rem;
    background: white;
    box-shadow: 5px 5px 5px -5px #333;
    padding: 0;
    border-radius: 8px;
    margin: 1rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const BackComponent = styled(FrontComponent)`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1{
        color: ${dark};
        font-size: 2rem;
        font-weight: bold;
        margin: 0;
    }
    h2{
        color: ${dark};
        font-size: 1.6rem;
        font-weight: 300;
    }
    p{
        color: ${darkBlue};
        font-size: 1.8rem;
        font-weight: normal;
        margin: 0;
    }
`;

class MemberCard extends React.Component {
    constructor() {
      super();
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <FrontComponent key="front">
            <img src={require("../../images/about/team/amine.png")} />
            <button onClick={this.handleClick}>Click to flip</button>
          </FrontComponent>
   
          <BackComponent key="back">
            <h1> Amine Athmani </h1>
            <h2> GDG Manager </h2>
            <p> fm_athmani@esi.dz </p>
            <button onClick={this.handleClick}>Click to flip</button>
          </BackComponent>
        </ReactCardFlip>
      )
    }
}
export default MemberCard*/


const StyledCard = styled.div`
    width: 22rem;
    height: 25rem;
    background: white;
    box-shadow: 5px 5px 5px -5px #333;
    padding: 0;
    border-radius: 8px;
    margin: 1rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

const MemberCard = ({picture}) => {
    return(
        <StyledCard>
            <img src={picture} />
        </StyledCard>
    )
}

export default MemberCard