import React from 'react'
import styled from 'styled-components'
import { gray } from '../styles/Colors';


const StyledBadge = styled.div`
    width: 12rem;
    position: fixed;
    right: 5rem;
    top: 5rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;


const WtmBadge = () => {
    return(
        <StyledBadge>
            <img src={require("../images/wtm_badge.png")} />
        </StyledBadge>
    )
}

export default WtmBadge