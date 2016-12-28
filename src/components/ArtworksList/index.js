import React, { PropTypes } from "react"

import ArtworkPreview from "../ArtworkPreview"

import styles from "./index.css"

const ArtworksList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li key={ page.title }><ArtworkPreview { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

ArtworksList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default ArtworksList
