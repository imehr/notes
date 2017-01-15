import React, { PropTypes } from "react"
import Slider from "react-slick"
import {Grid, Cell } from "react-mdl"

import styles from "./index.css"



const AutoPlaySlider = ({ featuredArtworks }) => {
const settings = {
dots: false,
fade: true,
speed: 1500,
lazyLoad: true,
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
nextArrow: false,
prevArrow: false
}


return (
<div>


<Grid style={{width: '100%', margin: 'auto'}} >

<Cell
col={ 12 }
>
<Slider {...settings}>
{ featuredArtworks.map((featured) => (
<div  key={ featured.__url  } ><img className={styles.imgaps} src={featured.featuredArtwork} /></div>
)) }	
</Slider>
</Cell>



</Grid>

</div>
)
}

AutoPlaySlider.propTypes = {
featuredArtworks: PropTypes.array.isRequired,
}

export default AutoPlaySlider


