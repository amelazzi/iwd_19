import React from 'react'
import styled from 'styled-components'
import { dark, darkGreen } from '../../styles/colors'


const FormContainer = styled.div`
    margin: 10rem 5rem;
    padding-right: 20rem;
    form{
        width: 100%;
    }
    @media (max-width: 35em) {
        padding: 0;
        margin: 4rem;
    }
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 35em) {
        flex-direction: column;
        width: 122%;
    }
`;

const Input = styled.input`
    width: 28%;
    border: 1px solid ${dark};
    border-radius: 3.2rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.8rem;
    margin: 0rem !important;

    ::placeholder{
        font-size: 1.6rem;
    }
    :focus{
        outline: none;
    }
    @media (max-width: 35em) {
        width: 75%;
        margin-bottom: 1rem !important;
    }
`;

const StyledTextArea = styled.textarea`
    width: 96.4%;
    margin-top: 3.2rem;
    height: 24rem;
    border: 1px solid ${dark};
    border-radius: 3.2rem;
    padding: 1.6rem;
    font-size: 18px;
    ::placeholder{
        font-size: 1.6rem;
    }
    :focus{
        outline: none;
    }
    @media (max-width: 35em) {
        width: 92%;
        margin-top: 1rem;
        margin-bottom: 1rem !important;
    }
`;

const StyledBtn = styled.input`
    background: ${darkGreen};
    border: none;
    border-radius: 3.2rem;
    padding: 0.8rem 3.2rem;
    font-size: 1.8rem;
    color: white;
    margin: 0;
    margin-top: 3.2rem;
    :hover{
        cursor: pointer;
    }
`;

const Form = () => {
    return(
        <FormContainer>
            <form>
                <InfoContainer>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Email"/>
                </InfoContainer>
                <StyledTextArea placeholder="Message"/>
                <StyledBtn type="submit" value="Send Message" /> 
            </form>
        </FormContainer>
    )
}   
export default Form