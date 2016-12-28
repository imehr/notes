import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ArtworkPreview = ({ __url, date, thumbnailImage,thumbnailCaption }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        <div>
          <img
            src={thumbnailImage} 
            width="100"
            height="100"
          />
        </div>
        <span className={ styles.meta }>
          {thumbnailCaption }          
        </span>

      </Link>
       <div className={ styles.meta }>
         {
           pageDate &&
             <time key={ pageDate.toISOString() }>
               { pageDate.toDateString() }
             </time>
         }
       </div>


    </div>
  )
}

ArtworkPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  thumbnailImage: PropTypes.string,
  thumbnailCaption: PropTypes.string,
}

export default ArtworkPreview
