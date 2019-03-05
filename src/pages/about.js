import React from "react"
import styled from 'styled-components'

import { darkGreen } from "../styles/colors"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import Section from '../components/section'
import MemberCard from '../components/about/memberCard'

const background=require("../images/about/background.png")


/*----------------------------- Variables --------------------------*/

var MembersPics =[
    {picture: require("../images/about/team/amine.png"), 
        name: "Amine ATHMANI", role:"GDG Manager", email:"fm_athmani@esi.dz" },
    {picture: require("../images/about/team/amel.png"), 
        name: "Amel AZZI", role:"WTM Embassador", email:"ea_azzi@esi.dz" },
    {picture: require("../images/about/team/afaf.png"), 
        name: "Afaf KELAI", role:"WTM Embassador", email:"ea_kelai@esi.dz" },
    {picture: require("../images/about/team/manal.png"), 
        name: "Manal SLAMANI", role:"WTM Organizer", email:"em_slamani@esi.dz" },
    {picture: require("../images/about/team/batoul.png"), 
        name: "El-Batoul MAZIGHI", role:"Com Department Lead", email:"fe_mazighi@esi.dz" },
    {picture: require("../images/about/team/ismail.png"), 
        name: "Ismail ALEM", role:"Com Department Lead", email:"alem.ismail.99@gmail.com" },
    {picture: require("../images/about/team/raouf.png"), 
        name: "Raouf GATTAL", role:"Design Department Lead", email:"fa_gattal@esi.dz" },
    {picture: require("../images/about/team/hadjer.png"), 
        name: "Hadjer BenMEZIANE", role:"Dev Department Lead", email:"fh_benmeziane@esi.dz" },
    {picture: require("../images/about/team/meyssa.png"), 
        name: "Meyssa ZOUAMBI", role:"Dev Department Lead", email:"fm_zouambi@esi.dz" },
    {picture: require("../images/about/team/djamal.png"), 
        name: "Djamal BELILET", role:"Dev Department Lead", email:"fd_belilet@esi.dz" },
    {picture: require("../images/about/team/abir.png"), 
        name: "Abir HAMMACHE", role:"Logistic Department Lead", email:"fa_hammache@esi.dz" },
    {picture: require("../images/about/team/masci.png"), 
        name: "Masci HAMMACHE", role:"Logistic Department Lead", email:"em_slamani@esi.dz" },
    {picture: require("../images/about/team/soumia.png"), 
        name: "Soumia SAADOUNE", role:"Marketing Department Lead", email:"es_saadoun@esi.dz" },
    {picture: require("../images/about/team/nadjib.png"), 
        name: "Nadjib SOUAB", role:"HR Responsible", email:"fn_souab@esi.dz" },
    {picture: require("../images/about/team/azzeddine.png"), 
        name: "Azzeddine CHENINE", role:"HR Responsible", email:"fa_chenine@esi.dz" },
];

const Members = MembersPics.map((member) =>
    <MemberCard key={member.picture} picture={member.picture}
        name={member.name}
        role={member.role}
        email={member.email}></MemberCard>
);



const About = ({location}) => (
<Layout location={location}>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Head background={background} title="Women Techmakers Algiers" subtitle=""
        text="International Women’s Day (IWD) is marked on March 8th every year. 
        In different regions."/>
    <Section color={darkGreen} title="Our Team" args={Members}/>
</Layout>
) 
 
export default About
