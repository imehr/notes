import React, { PropTypes, Component } from "react"
import classNames from 'classnames';
import { Link } from "phenomic"

import styles from "./index.css"

export default class ArtworkPreview extends Component {
constructor (props) {
super(props);
this.state = {
isHovered: false
};
}  
render() {
const { __url, thumbnail, title, caption } = this.props;
//const pageDate = date ? new Date(date) : null
const theThumbnail = thumbnail
const theCaption = caption
return (
<div 
className={classNames([styles.imgwrapper], { [styles.hovered]: this.state.isHovered })}
onMouseOver={() => this.setState({isHovered: true})} 
onMouseOut={() => this.setState({isHovered: false})} 
>
<span className={styles.hover_text } >

{ theCaption.line1 } <br />



</span>

<Link to={ __url } className={ styles.title }>

<img
src={theThumbnail.image}
className={ styles.imgt }
alt ={title}
/>

</Link>
</div>
);
}
}

ArtworkPreview.propTypes = {
__url: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
caption: PropTypes.object.isRequired,
thumbnail: PropTypes.object.isRequired
}