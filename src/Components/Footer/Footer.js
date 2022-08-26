import React from 'react'
import './Footer.css'


export default function Footer() {
  return (
    <div>        
        <div className='footer1'>
            Support Line : +234 806 3290 848
            <p>Our best promotions sent to your inbox</p>
        </div>        
        
        <div className='footer'>
            <div className='col'>
                <h4>Get to Know Us</h4>
                <p>About Amazon</p>
                <p>Our Blog</p>
                <p>Forum</p>
                <p>Terms & Conditions</p>
            </div>

            <div className='col'>
                <h4>Amazon Payment Products</h4>
                <p>Wallet</p>
                <p>Verve</p>
                <p>MasterCard</p>
                <p>Visa</p>
            </div>

            <div className='col'>
                <h4>Buying on Amazon</h4>
                <p>Buyer safety centre</p>
                <p>FAQs</p>
                <p>Delivery</p>
                <p>Amazon Return policy</p>
                <p>Digital Services</p>
                <p>Become an Affiliate</p>
            </div>

            <div className='col'>
                <h4>More Info</h4>
                <p>Site Map</p>
                <p>Track My Order</p>
                <p>Privacy Policy</p>
                <p>Authentic Items policy</p>
            </div>

            <div className='col'>
                <h4>Let us Help You</h4>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Shipping Rates</p>
                <p>Help</p>
            </div>
        </div>  

        <div className='copyright @2022'>
        <hr/> 
            Designed by Magicstore
        </div>
    </div>
  )
}
