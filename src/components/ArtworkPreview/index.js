import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ArtworkPreview = ({ __url, thumbnail }) => {
  //const pageDate = date ? new Date(date) : null
  const theThumbnail = thumbnail
  return (
    <div className={ styles.imgwrapper }>
      <Link to={ __url } className={ styles.title }>

          <img
            src={theThumbnail.image}
            className={ styles.imgt }


          />

      </Link>



    </div>
  )
}

ArtworkPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,

}

export default ArtworkPreview
