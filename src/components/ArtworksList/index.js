import React, { PropTypes } from "react"
import {Grid, Cell } from "react-mdl"

import ArtworkPreview from "../ArtworkPreview"

//import styles from "./index.css"

const ArtworksList = ({ pages }) => {
return (
<div>



{
pages.length
? (
<Grid style={{width: '100%', margin: 'auto'}} noSpacing={ false }>
{ pages.map((page) => (
<Cell
key={ page.__url  }
col={ 2 }
phone={ 2 }
tablet={ 2 }
>
<ArtworkPreview { ...page } />

</Cell>
)) }
</Grid>
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
