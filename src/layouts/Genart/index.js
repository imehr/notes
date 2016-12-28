import React, { PropTypes } from "react"
import {Grid, Cell } from "react-mdl"

import Page from "../Page"

import styles from "./index.css"

const Genart = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null
  const artworks = props.head.artworks
  const caption = props.head.caption
  return (
    <Page
      { ...props }
      header={
        <div>
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>


        <Grid>
          { artworks.map((artwork) => (
            <Cell
              key={ artwork.name }
              col={ 2 }
              phone={ 2 }
            >
              <img src={ artwork.image } />
              <h4>{ artwork.title }</h4>
              <p>{ artwork.description }</p>
            </Cell>
          )) }
        </Grid>
        <hr />
        <p>
          {caption.line1}
          <br />
          {caption.line2}
          <br />
          {caption.line3}
          <br />
          {caption.line4}
          <br />
          <em>{caption.credit}</em>
        </p>


        </div>
      }
    >
      
      
    </Page>
  )
}

Genart.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Genart
