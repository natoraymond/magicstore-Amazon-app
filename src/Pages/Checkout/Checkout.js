import React from 'react'
import './Checkout.css'
import Subtotal from '../../Components/Subtotal/Subtotal'
import { useStateValue } from '../../Components/StateProvider'
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct'

export default function Checkout() {
    const [{basket}, dispatch]= useStateValue()

    return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img
            className="checkout__ad"
            src="https://www.agentexperience.com/NAE/AssetsWebsite/Image/Common/IATAN-ID-Card-Banners-April-20211920x360.jpg"
            alt="pic"
            />

            <div>
                <h2 className='checkout__title'>
                    Your shopping basket
                </h2>

                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                {/*checkOutProduct*/}
            </div>
        </div>       

        <div className='checkout__right'>
            <Subtotal />
        </div>

    </div>
  )
}
