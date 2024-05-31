import React, { useContext } from 'react';
import { StateContext } from '../context/AppProvider';
import CardDish from './CardDish'; // Assuming you have CardDish component defined somewhere

function Checkout() {
  const cartPackage = useContext(StateContext);

  // Mapping cart items to CardDish components
  const cartItemsAre = cartPackage.cartItems.map((item, index) => {
    return (
      <CardDish
        key={index} // Make sure to provide a unique key when rendering a list of components
        menuItem={{
          strMealThumb: item.img,
          strMeal: item.title
        }}
        index={index}
      />
    );
  });

  return (
    <>
      <h1 className='cart-heading'>Your Favourites</h1>
      <section className="special-dishes">
        <div className="container">
          <div className="special-dishes-list">
            <ul className="flex flex-wrap">{cartItemsAre}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
