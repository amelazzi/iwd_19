import React from "react"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import Head from "../components/signUp/head"


const ContactUs = ({location}) => (
    <Layout location={location}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Head />
    </Layout>
)

export default ContactUs
 