import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 200px;
    height: 225px;
    background: white;
    box-shadow: 5px 5px 5px -5px #333;
    padding: 20px 30px;
    border-radius: 8px;
    margin: 32px;
    img{
        width: 100%;
        width: 100%;
        object-fit: cover;
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