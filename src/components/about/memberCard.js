import React from 'react'
import styled from 'styled-components'

import ReactCardFlip from 'react-card-flip';
import { dark, darkBlue, blue } from '../../styles/colors';


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

const FrontButton = styled.button`
    width: 80%;
    margin-left: 10%;
    margin-top: 20rem;
    background: ${blue};
    border: none;
    color: white; 
    border-radius: 0.7rem;
    font-size: 1.4rem;
    padding: 0.8rem;
    :hover{
        cursor: pointer;  
        box-shadow: 5px 5px 5px -5px #333;
    }
`;

const BackButton = styled(FrontButton)`
    margin-top: 3rem;
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
          <FrontComponent picture={this.props.picture} key="front">
            <FrontButton onClick={this.handleClick}> Contact </FrontButton>
          </FrontComponent>
   
          <BackComponent key="back">
            <h1> {this.props.name} </h1>
            <h2> {this.props.role} </h2>
            <p> {this.props.email} </p>
            <BackButton onClick={this.handleClick}> Done </BackButton>
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
            <img src={picture} />
        </StyledCard>
    )
}

export default MemberCard*/