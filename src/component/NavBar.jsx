import React from "react";
import '../styleSheet/NavBar.css'
import logoBrand from '../imgs/mushroom.png'
import FormSearch from "./FormSearch";
import MylibraryBar from "./MyLibraryBar";

function NavBar() {
    return(
        <div className="navContainer">
            <img className="navBrand" src={logoBrand} alt="logo Game Tracker" />
            <MylibraryBar></MylibraryBar>
            <FormSearch></FormSearch>
        </div>
    )
}

export default NavBar