import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

function AddToCart({ addToCartItem }) {
  const cartPackage = useContext(StateContext)

  let cartItemsAre = cartPackage.cartItems.map((item,index) => {
    return (
      <div key={index}>
        <img src={item.img} alt="" />
        <h6>{item.title}</h6>
      </div>
    )
  })

  // let addToCartResults = props.addToCartItem.map((item) => {
  //   return (
  //     <div>
  //       <img src={item.img} alt="" />
  //       <h6>{item.title}</h6>
  //     </div>
  //   )
  // })

  return (
    <div className="add-to-cart-wrapper">
      <div className="add-to-cart-item">
        <h6>Cart Items</h6>
        {cartItemsAre}
      </div>
    </div>
  )

}
export default AddToCart