import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";

const Home = () => {

    const pokemons = useSelector((state) => state.pokemons.payload)
    console.log(pokemons);

/* const RenderCards = () => {

    pokemons && pokemons.map((ele, index) => {
        
    });

}; */
  

    return (
        <div>
            <Cards></Cards>
        </div>
    )
};

export default Home;