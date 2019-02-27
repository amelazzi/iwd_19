import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import LeftSection from "../components/home/leftSection"
import RightSection from "../components/home/rightSection"
import Section from '../components/section'
import Card from '../components/home/card'
import { dark, darkGreen } from "../styles/Colors";

const background=require("../images/home/background.png")

/*----------------------------- Variables --------------------------*/

var SponsorsLogo =[
    {logo: require("../images/home/google.png")},
    {logo: require("../images/home/github.png")}
];

const Sponsors = SponsorsLogo.map((sponsor) =>
    <Card key={sponsor.logo} picture={sponsor.logo}></Card>
);

/*----------------------------- Variables --------------------------*/

var PartnersLogo =[
    {logo: require("../images/home/gdg.png")}
];

const Partners = PartnersLogo.map((partner) =>
    <Card key={partner.logo} picture={partner.logo}></Card>
);

const IndexPage = ({location}) => (
<Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head background={background} title="IWD’19 Algiers" subtitle="March, 9th 2019"
        text="Higher National School of Computer Science - ESI ex INI -"/>
    <RightSection picture={require("../images/home/iwd.png")}
        title="What is International Women Day?"
        text="International Women’s Day (IWD) is marked on March 8th every year. 
        In different regions, the focus of celebrations ranges from general respect 
        and appreciation for women to a celebration of women’s economic, political, 
        and social achievements."/>
    <LeftSection picture={require("../images/home/celebration.png")}
        title="Why Google Celebrate IWD?"
        text="From Ada Lovelace to Grace Hopper (and thousands of Googlers), we’re proud 
        of the contributions women in technology make across our industry and across our 
        company. Google supports and celebrates women in technology through numerous 
        initiatives, including the Small Business Supplier Diversity and Accelerate with 
        Google programs, the Google Cultural Institute, our Women@ employee resource group, 
        and more. International Women’s Day is an important moment to recognize how women 
        have influenced the tech industry and beyond."/>
    <RightSection picture={require("../images/home/wtm.png")}
        title="What is Women Techmakers?"
        text="Women Techmakers is Google’s global program for women in technology. 
        Kicked off in 2012 by then VP of Google[x], Megan Smith, Women Techmakers is now 
        led by Women in Technology Advocate Natalie Villalobos and a global team of Googlers 
        who are passionate about empowering women in technology through increased visibility, 
        community, and resources."/>

    <Section color={dark} title="Supported By" args={Sponsors}/>
    <Section color={darkGreen} title="Partners" args={Partners}/>
</Layout>
) 

export default IndexPage
