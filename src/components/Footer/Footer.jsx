import React from 'react' 
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis vero distinctio tenetur consectetur similique sit, saepe quos quas praesentium minima dolorem doloribus in ullam magni illo. Sunt, provident. Adipisci!</p>
                <div className="footer-social-icons">
                   <img src={assets.facebook_icon} alt="" />
                   <img src={assets.twitter_icon} alt="" />
                   <img src={assets.linkedin_icon} alt="" /> 
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                <li><a href='/'>home</a></li>
                <li><a href='#explore-menu'>Menu</a></li>
                <li><a href="#footer">contact us</a></li>
                <li><a>Privacy policy</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+212 700213654</li>
                    <li>contact@company.com</li>
                </ul>
            </div>
        </div> 
        <hr />
        <p className="footer-copyright">COPYRIGHT 2024 © MOHAMMED KARIM DAHMANI - ALL RIGHTS RESERVED</p>   
    </div>
  )
}

export default Footer