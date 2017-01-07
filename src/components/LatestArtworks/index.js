import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import ArtworksList from "../../components/ArtworksList"
import AutoPlaySlider from "../../components/AutoPlaySlider"

//import styles from "./index.css"

const defaultNumberOfPosts = 100

const LatestArtworks = (props, { collection }) => {
  const latestArtworks = enhanceCollection(collection, {
    filter: { layout: "Artwork" },
    sort: "date",
    reverse: true,
  })
  

  return (
    <div>
      <AutoPlaySlider featuredArtworks={ latestArtworks.slice(0, 6) }/>
      <ArtworksList pages={ latestArtworks.slice(0, props.numberOfPosts || defaultNumberOfPosts) } />
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
