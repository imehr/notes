import React, { PropTypes } from "react"
import {Grid, Cell } from "react-mdl"
import ReactPlayer from "react-player"


//import {browserHistory} from "phenomic/lib/client"

import PageArtwork from "../PageArtwork"

import styles from "./index.css"

const Artwork = (props) => {
  // it's up to you to choose what to do with this layout ;)
  //const pageDate = props.head.date ? new Date(props.head.date) : null
  const artworks = props.head.artworks
  const videofile = props.head.videofile
  const caption = props.head.caption
  return (
    
    
  
    <PageArtwork
      { ...props }
      header={
        <div>
            
          {/* 
          <header className={ styles.header }>
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
          */}


      {  
        videofile
        ? <Grid style={{width: '100%', margin: 'auto'}}>
          <Cell 
            col={ 12 }
            phone={ 12 }
            tablet={ 12 }
          >
            <div className={ styles.videoWrapper }>
              {/* solution for fluid video player :  https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php  */}
              <ReactPlayer url= {videofile}  />
              
            </div>
          </Cell>
        </Grid>
        : null
      }    
  
      



        <Grid style={{width: '100%', margin: 'auto'}}>
          { artworks.map((theArtwork) => (
            <Cell
              key={ theArtwork.name }
              col={ 12 }
              phone={ 12 }
              tablet={ 12 }
            >
              <img 
                className={ styles.img }
                src={ theArtwork.image } />
              {/*
              <h4>{ theArtwork.title }</h4>
              <p>{ theArtwork.description }</p> 
              */}

            </Cell>
          )) }
        </Grid>


        
        <p 
          className={ styles.txt }
        >
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
      
      
    </PageArtwork>
  )
}

Artwork.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Artwork
