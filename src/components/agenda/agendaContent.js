import React from 'react'
import styled from 'styled-components'

import AgendaTable from './agendaTable'

const StyledContent = styled.div`
    h1{
        text-align: center;
        font-size: 7.2rem;
    }
`;


const AgendaContent = () => {
    return(
        <StyledContent>
            <h1> Agenda </h1>
            <AgendaTable/>
        </StyledContent>
    )
}
export default AgendaContent