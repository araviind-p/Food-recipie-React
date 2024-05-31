import React, { useContext, useState, useEffect } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes() {

  const allMenus = useContext(AllMenuContext)

  const [showPopUp, setShowPopUp] = useState(false)
  const [currentDish, setCurrentDish] = useState("Beef")
  const [addToCartItem, setAddToCartItem] = useState([])
  const [menuCategory, setMenuCategory] = useState([]);
  const [singleDish, setSingleDish] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [activePage, setActivePage] = useState(1);

  function showPopupHandler(dishName) {
    setCurrentDish(dishName)
    setShowPopUp(true)
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


  useEffect(() => {
    const getAllTheCategories = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);
      let categoryData = await response.json();
      setMenuCategory(categoryData.categories);
    };
    const getOnlyOneDish = async () => {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
      let response = await fetch(API_URL);
      let singleDishData = await response.json();
      setSingleDish(singleDishData.meals);

    };
    getAllTheCategories();
    getOnlyOneDish();
    showFilteredDishesHandler(currentDish)
  }, []);

  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);
  function showFilteredDishesHandler(category) {
    setSingleDish([]);
    setActivePage(1);
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem, index) => {
        return (

          <CardDish showPopup={showPopupHandler} menuItem={menuItem} key={index} />
        );
      });
    setFilteredDishes(filteredDishesAre);
  }

  //show only single dish
  // let maxSpecialDishes = 8;
  // let singleDishItems = singleDish.slice(0, 4).map((menuItem, index) => {
  //   return index < maxSpecialDishes
  //     ? (
  //       <CardDish showPopup={showPopupHandler} menuItem={menuItem} key={index} />
  //     ) : null;
  // }
  // );


  let allCategories = menuCategory.map((item, index) => {
    return (
      <li
        key={index}
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  return (
    <>
      {showPopUp && currentDish && (
        <Popup
          closePopup={closePopupHandler}
          currentDish={currentDish || singleDish}
          addToCartHandler={addToCartHandler}
        />
      )}
      <div className="special-dishes">
        <div className="container">
          <div className="text-center">
            <h2>Choose Your Dishes</h2>
            <p>Select favourite categories from below list...</p>
          </div>
        </div>
        <div className="filtered-dishes">
          <ul>{allCategories}</ul>
        </div>

        <div className="special-dishes-list">
          <ul className="flex flex-wrap">
            {/* {singleDishItems.length !== 0 ? (
              singleDishItems
            ) : ( */}
            {

              showTheseDishesNow.length !== 0 ? (
                showTheseDishesNow
              ) : (
                <div className="alert">
                  <h3>Sorry, No items found</h3>
                  <h4>Please try another dish</h4>
                </div>
              )
            
            }
          </ul>
        </div>
      </div>
      <Pagination
        filteredDishes={filteredDishes}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </>
  );

}

export default FilteredDishes;