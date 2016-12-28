import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import ArtworksList from "../../components/ArtworksList"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const LatestArtworks = (props, { collection }) => {
  const latestArtworks = enhanceCollection(collection, {
    filter: { layout: "Genart" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2 className={ styles.latestArtworks }>
        { "Latest Posts" }
      </h2>
      <ArtworksList pages={ latestArtworks } />
    </div>
  )
}

LatestArtworks.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestArtworks.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestArtworks
