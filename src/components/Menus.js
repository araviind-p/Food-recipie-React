import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from './Checkout';
import { AppProvider } from '../context/AppProvider';

export default function Menus() {
  return (
    <AllMenus>
      <div>
        <Router>
          <AppProvider>
            <Header />
            <Hero />
            <Routes>
              <Route path="/" element={<div><SpecialDishes /> <FilteredDishes /></div>} />
              <Route path="/favourites" element={<Checkout />} />
            </Routes>
          </AppProvider>
        </Router>
      </div>
    </AllMenus >
  );
}
