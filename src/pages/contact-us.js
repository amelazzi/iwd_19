import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { dark, blue, darkGreen } from "../styles/Colors"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/head"
import Form from '../components/contact/from'

const background=require("../images/contact/background.png")


const ContactUs = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Head background={background} title="Contact Us" subtitle=""
            text="For any question regarding our event, reach us below"/>
        <Form/>
    </Layout>
)

export default ContactUs
