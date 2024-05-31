// import React from 'react'

// function CardDish(props) {
//     return (

//         <li key={props.index}>
//             <a href="/#" onClick={() => { props.showPopup(props.menuItem.strMeal) }}>
//                 <img
//                     src={props.menuItem.strMealThumb}
//                     alt={props.menuItem.strMeal}
//                     className="br-10 dish-img"
//                 />
//                 <h4 className='text'>{props.menuItem.strMeal}</h4>
//             </a>
//         </li>

//     )
// }

// export default CardDish


import React from 'react';

function CardDish(props) {
  return (
    <li key={props.index}>
      <a href="/#" onClick={() => props.showPopup(props.menuItem.strMeal)}>
        <img
          src={props.menuItem.strMealThumb}
          alt={props.menuItem.strMeal}
          className="br-10 dish-img"
        />
        <h4 className="text">{props.menuItem.strMeal}</h4>
      </a>
    </li>
  );
}

export default CardDish;
