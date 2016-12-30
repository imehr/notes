import React, { PropTypes } from "react"
import { Link } from "phenomic"

import styles from "./index.css"

const ArtworkPreview = ({ __url, thumbnail }) => {
  //const pageDate = date ? new Date(date) : null
  const theThumbnail = thumbnail
  return (
    <div>
      <Link to={ __url } className={ styles.title }>
        <div>
          <img
            src={theThumbnail.image} 
            
            
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
  thumbnail: PropTypes.object.isRequired,
  
}

export default ArtworkPreview
