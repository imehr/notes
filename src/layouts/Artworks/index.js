import React from "react"

import LatestArtworks from "../../components/LatestArtworks"
import Page from "../Page"

const Artworks = (props) => {
  return (
    <Page { ...props }>
      <LatestArtworks />
    </Page>
  )
}

export default Artworks
