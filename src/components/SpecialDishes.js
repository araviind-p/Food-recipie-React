import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
// import AddToCart from "./AddToCart";

function SpecialDishes() {

  const [showPopUp, setShowPopUp] = useState(false)
  const [currentDish, setCurrentDish] = useState("")
  const [addToCartItem, setAddToCartItem] = useState([])

  const allMenus = useContext(AllMenuContext)

  function showPopupHandler(dishName) {
    setShowPopUp(true)
    setCurrentDish(dishName)
  }

  //close popup
  function closePopupHandler() {
    setShowPopUp(false)
  }

  //add to cart handler
  function addToCartHandler(addToCartImg, addToCartTitle) {
    setAddToCartItem([
      ...addToCartItem,
      {
        "img": addToCartImg,
        "title": addToCartTitle
      }
    ])
  }


  let maxSpecialDishes = 8;
  let specialMenus = allMenus.map((menuItem, index) => {

    return index < maxSpecialDishes
      ? (
        <CardDish menuItem={menuItem} key={index} showPopup={showPopupHandler} />
      ) : null;

  });
  return (
    <section className="special-dishes">
      {showPopUp && <Popup
        closePopup={closePopupHandler}
        currentDish={currentDish}
        addToCartHandler={addToCartHandler}
      />}

      <div className="container">
        {/* {addToCartItem && <AddToCart addToCartItem={addToCartItem} />} */}
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Experience a culinary delight with our Chef's Signature Creation, a dish that embodies the perfect harmony of flavors and textures. Crafted with the finest ingredients, each element is carefully selected and expertly prepared to create a symphony on your palate.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
