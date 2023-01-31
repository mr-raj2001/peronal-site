import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import "../styles/Footer.css";



function Footer() {
  return (
    <div className='footer'>
        <div>
           <InstagramIcon />
           <TwitterIcon />

        </div>
        <p>
                &copy; 2023 RishavRaj
            </p>
    </div>
  )
}

export default Footer