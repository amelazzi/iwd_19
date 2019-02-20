import React from "react"
import styled from 'styled-components'

import { darkGreen } from "../styles/Colors"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import Section from '../components/section'
import MemberCard from '../components/about/memberCard'

const background=require("../images/about/background.png")

/*----------------------------- Variables --------------------------*/

var MembersPics =[
    {picture: require("../images/home/google.png")},
    {picture: require("../images/home/github.png")},
    {picture: require("../images/home/gdg.png")},
    {picture: require("../images/home/google.png")},
    {picture: require("../images/home/github.png")},
    {picture: require("../images/home/gdg.png")},
];

const Members = MembersPics.map((member) =>
    <MemberCard key={member.picture} picture={member.picture}></MemberCard>
);



const About = () => (
<Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head background={background} title="Women Techmakers Algiers" subtitle=""
        text="International Women’s Day (IWD) is marked on March 8th every year. 
        In different regions."/>
    <Section color={darkGreen} title="Our Team" args={Members}/>
</Layout>
)

export default About
