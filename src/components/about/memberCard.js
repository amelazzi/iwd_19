import React from 'react'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip'

import { dark, darkBlue } from "../../styles/colors"


const FrontComponent = styled.div`
    width: 22rem;
    height: 25rem;
    background: white;
    box-shadow: 5px 5px 5px -5px #333;
    padding: 0;
    border-radius: 8px;
    margin: 1rem;
    background-image: url(${props=>props.picture});
    background-size: 102%;
    background-repeat: no-repeat;
    :hover{
      cursor: pointer;
      box-shadow: 5px 5px 5px -5px #333,
        0px 16px 24px 2px rgba(0, 0, 0, 0.14),
        0px 6px 30px 5px rgba(0, 0, 0, 0.12);
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
    constructor(props) {
      super(props);
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
          <FrontComponent picture={this.props.picture} onClick={this.handleClick} key="front">
          </FrontComponent>
   
          <BackComponent key="back" onClick={this.handleClick}>
            <h1> {this.props.name} </h1>
            <h2> {this.props.role} </h2>
            <p> {this.props.email} </p>
          </BackComponent>
        </ReactCardFlip>
      )
    }
}
export default MemberCard


/*const StyledCard = styled.div`
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
            <img src={picture} alt="profile" />
        </StyledCard>
    )
}

export default MemberCard*/