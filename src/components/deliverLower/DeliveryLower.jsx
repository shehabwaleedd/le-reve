import React from 'react'
import "./DeliveryLower.scss"
import img from "../../assets/epicurrence-ITxG2yay1ak-unsplash.jpg"

const DeliveryLower = () => {
    return (
        <div className='deliveryLower'>
            <div className="deliveryLower__container containered">
                <div className="deliveryLower__left">
                    <ul>
                        <li>
                            <h2>Delivery is available from 12.00 to 22.00</h2>
                        </li>
                        <li>
                            <h2>You can order by calling our phones in contact section</h2>
                        </li>
                        <li>
                            <h2>Radius 4 kilometers</h2>
                        </li>
                    </ul>
                </div>
                <div className="deliveryLower__right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default DeliveryLower