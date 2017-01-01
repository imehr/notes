import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import "./styles/material-grid.global.css"
import "./styles/slick.global.css"
import "./styles/slick-theme.global.css"
import "react-mdl/extra/material.js"


import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
    <Header />
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
