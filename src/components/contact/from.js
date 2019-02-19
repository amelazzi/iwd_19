import React from 'react'
import styled from 'styled-components'
import { dark, green, darkGreen } from '../../styles/Colors';
import { type } from 'os';


const FormContainer = styled.div`
    padding: 48px 56px;
    padding-right: 200px;
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 30%;
    border: 2px solid ${dark};
    border-radius: 32px;
    padding: 8px 16px;
    font-size: 18px;
    ::placeholder{
        font-size: 16px;
    }
    :focus{
        outline: none;
    }
`;

const StyledTextArea = styled.textarea`
    margin-top: 32px;
    width: 100%;
    height: 18rem;
    border: 2px solid ${dark};
    border-radius: 32px;
    padding: 16px 16px;
    font-size: 18px;
    ::placeholder{
        font-size: 16px;
    }
    :focus{
        outline: none;
    }
`;

const StyledBtn = styled.input`
    background: ${darkGreen};
    border: none;
    border-radius: 32px;
    padding: 8px 32px;
    font-size: 18px;
    color: white;
    margin-top: 32px;
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