import React from 'react'
import "./index.scss"

function Footer() {
  return (
    <footer>
      <div id='mainFooter'>
        <div id='iconFooter'>
          <div id='textFooter'>
            <ul>
              <li><a href=''>ABOUT ROG</a></li>
              <li><a href=''>HOME</a></li>
              <li><a href=''>NEWSROOM</a></li>
              <li><a href=''>ACCESSIBILITY HELP</a></li>
            </ul>
          </div>
          <div>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitch"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <a href=''>
              <p><i class="fa-solid fa-globe"></i>Global/English</p>
            </a>
          </div>
          <div>
            <ul>
              <li><a href=''>TERMS OF USE NOTICE</a></li>
              <li><a href=''>PRIVACY POLICY</a></li>
            </ul>
            <p>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</p>
          </div>
        </div>
        <div className='imgFooter'>
          <img src='https://dlcdnwebimgs.asus.com/gain/d21639fb-61ed-44c0-bb72-df9698e523fe'></img>
        </div>
      </div>
     </footer>
  )
}

export default Footer