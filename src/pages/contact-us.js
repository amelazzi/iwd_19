import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { dark, blue, darkGreen } from "../styles/colors"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import Form from '../components/contact/form'
import Map from '../components/contact/map'

const background=require("../images/contact/background.png")


const ContactUs = ({location}) => (
    <Layout location={location}>
        <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
        <Head background={background} title="Contact Us" subtitle=""
            text="For any question regarding our event, reach us below"/>
        <Form/>
    </Layout>
) 

export default ContactUs
