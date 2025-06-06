import React from 'react'
import './Footer.css'
import {assets} from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit soluta, cumque tenetur molestiae quibusdam natus voluptates laudantium laborum repudiandae?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+254 700 000 001</li>
                    <li>hello@email.me</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved </p>
    </div>
  )
}

export default Footer