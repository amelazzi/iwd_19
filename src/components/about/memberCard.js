import React from 'react'
import styled from 'styled-components'

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