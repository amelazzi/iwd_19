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
    {picture: require("../images/about/team/amine.png")},
    {picture: require("../images/about/team/manal.png")},
    {picture: require("../images/about/team/raouf.png")},
    {picture: require("../images/about/team/abir.png")},
    {picture: require("../images/about/team/soumia.png")},
    {picture: require("../images/about/team/ismail.png")},
    {picture: require("../images/about/team/batoul.png")},
    {picture: require("../images/about/team/djamal.png")},
    {picture: require("../images/about/team/masci.png")}
];

const Members = MembersPics.map((member) =>
    <MemberCard key={member.picture} picture={member.picture}></MemberCard>
);



const About = ({location}) => (
<Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head background={background} title="Women Techmakers Algiers" subtitle=""
        text="International Women’s Day (IWD) is marked on March 8th every year. 
        In different regions."/>
    <Section color={darkGreen} title="Our Team" args={Members}/>
</Layout>
) 
 
export default About
