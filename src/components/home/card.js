import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 325px;
    height: 130px;
    padding: 20px 30px;
    border-radius: 8px;
    margin: 32px;
    img{
        width: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const Card = ({picture}) => {
    return(
        <StyledCard>
            <img src={picture} alt="profil" />
        </StyledCard>
    )
}

export default Card