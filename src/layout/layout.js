import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import styled from 'styled-components'
import GlobalStyles from '../styles/globalStyles'

import Header from "../components/header"
import Footer from "../components/footer"


const ChildContainer = styled.div`
    width: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ChildContainer>
            <main>{children}</main>
        </ChildContainer>
        <Footer/>
        <GlobalStyles/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
