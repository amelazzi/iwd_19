import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import AgendaContent from '../components/agenda/agendaContent'

const background=require("../images/agenda/background.png")

const Agenda = ({location}) => (
<Layout location={location}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Head background={background} title="Agenda / Speakers" subtitle=""
        text="You want to see IWD Content?,check the Agenda and Speakers below."/>
    <AgendaContent/>
</Layout>
) 

export default Agenda
