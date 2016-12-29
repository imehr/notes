import React from "react"

import LatestArtworks from "../../components/LatestArtworks"
import PageArtwork from "../PageArtwork"

const Artworks = (props) => {
  return (
    <PageArtwork { ...props }>
      <LatestArtworks />
    </PageArtwork>
  )
}

export default Artworks
