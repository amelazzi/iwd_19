import React from "react"
import styled from 'styled-components'

import { darkGreen } from "../styles/Colors"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import MemberCard from '../components/about/memberCard'


const PartnersContainer = styled.div`
    background: ${darkGreen};
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const StyledH1 = styled.h1`
    font-size: 72px;
    color: white;
`;

const Sponsors = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


const About = () => (
<Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head title="Women Techmakers Algiers" subtitle=""
        text="International Women’s Day (IWD) is marked on March 8th every year. 
        In different regions, the focus of celebrations ranges from general respect 
        and appreciation for women to a celebration of women’s economic, political, 
        and social achievements."/>

    <PartnersContainer>
        <StyledH1> Our Team </StyledH1>
        <Sponsors>
            <MemberCard picture={require("../images/home/gdg.png")}/>
            <MemberCard picture={require("../images/home/gdg.png")}/>
            <MemberCard picture={require("../images/home/gdg.png")}/>
            <MemberCard picture={require("../images/home/gdg.png")}/>
        </Sponsors>
    </PartnersContainer>
</Layout>
)

export default About
