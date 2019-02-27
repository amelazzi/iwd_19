import React from 'react'
import styled from 'styled-components'
import { dark, green, darkGreen } from '../../styles/colors';
import { type } from 'os';


const FormContainer = styled.div`
    margin: 10rem 5rem;
    padding-right: 20rem;
    form{
        width: 100%;
    }
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Input = styled.input`
    width: 28%;
    border: 1px solid ${dark};
    border-radius: 3.2rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.8rem;
    margin: 0rem!important;

    ::placeholder{
        font-size: 1.6rem;
    }
    :focus{
        outline: none;
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