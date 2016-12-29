import React, { PropTypes } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"
import {browserHistory} from "phenomic/lib/client"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"
import backSvg from "../icons/icon-back.svg"
import logoSvg from "../icons/logo-mehran.svg"

import styles from "./index.css"


const Header = (props, { metadata: { pkg } }) => ( 
  
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        

        <Link
          className={ styles.link }
          to={ "/artworks/" }
        >
          <Svg svg={ backSvg } className={ styles.icon } cleanup />

        </Link>


        <Link
          className={ styles.link }
          to={ "/" }
        >
         <Svg svg={ logoSvg } className={ styles.logo } cleanup />
          {/* "Home" */}
        </Link>

        <Link
          className={ styles.link }
          to={ "/artworks/" }
        >
          { "Artworks" }
        </Link>
{/* 
        <a
          className={ styles.link }
          onClick={() => {
            browserHistory.goBack();
          }}
        >
          { "Back" }
        </a>
*/}

      </div>

      <div className={ styles.navPart2 }>
        {
          pkg.twitter &&
          <a
            href={ `https://twitter.com/${pkg.twitter}` }
            className={ styles.link }
          >
            <Svg svg={ twitterSvg } className={ styles.icon } cleanup />
            { "Twitter" }
          </a>
        }


      {/*
        {
          pkg.repository &&
          <a
            href={ pkg.repository }
            className={ styles.link }
          >
            <Svg svg={ gitHubSvg } cleanup />
            { "GitHub" }
          </a>
        }
      */}


      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
