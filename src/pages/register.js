import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import Head from "../components/signUp/head"


const FormBackground = require("../images/signUp/form-background.png")

const FormContainer = styled.div`
    padding: 0rem 8rem;
`;

const StyledFrom = styled.div`
    height: 210rem;
    background-image: url(${FormBackground});
    background-size: contain;
    background-position: center 50rem;
    background-repeat: no-repeat;
    iframe{
        margin-left: 0%;
        margin-top: -20rem;
        margin-bottom: 4rem;
    }
`;


const Register = ({location}) => (
    <Layout location={location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Head /> 
        <FormContainer>
            <StyledFrom >
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe7ax-7YK_dCjxx5vxnvbOmtvpZC1qh6tEQzZf5XHX6Ahz7Lw/viewform?embedded=true" width="100%" height="2300" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
            </StyledFrom>
        </FormContainer>
    </Layout>
)

export default Register
 