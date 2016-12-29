import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ArtworkPreview = ({ __url, date, thumbnail }) => {
  const pageDate = date ? new Date(date) : null
  const theThumbnail = thumbnail
  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        <div>
          <img
            src={theThumbnail.image} 
            width="100"
            height="100"
          />
        </div>
      {/*
        <span className={ styles.meta }>
          {theThumbnail.caption }          
        </span>
      */}
      </Link>
      
{/*
       <div className={ styles.meta }>
         {
           pageDate &&
             <time key={ pageDate.toISOString() }>
               { pageDate.toDateString() }
             </time>
         }
       </div>
*/}

    </div>
  )
}

ArtworkPreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  thumbnail: PropTypes.opject,
  
}

export default ArtworkPreview
