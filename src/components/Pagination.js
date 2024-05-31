import React from "react";

function Pagination(props) {
  let numberOfPages = [];
  for (
    let i = 1;
    i <= Math.ceil(props.filteredDishes.length / props.itemsPerPage);
    i++
  ) {
    numberOfPages.push(i);
  }

  function showNextDishesHandler(event) {
    props.setCurrentPage(event.target.id);
    props.setActivePage(event.target.id);
  }

  let pages = numberOfPages.map((pageNumber) => {
    return (
      <li
        id={pageNumber}
        onClick={showNextDishesHandler}
        className={props.activePage === pageNumber ? "active" : ""}
      >
        {pageNumber}
      </li>
    );
  });
  return (
    <section className="page-section">
      <ul className="pagination flex">{pages}</ul>
    </section>
  );
}

export default Pagination;
