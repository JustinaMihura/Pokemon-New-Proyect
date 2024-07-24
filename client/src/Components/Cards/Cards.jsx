import { useSelector } from "react-redux";
import Card from "../Card/Card";


const Cards = () => {

    const pokemons = useSelector((state) => state.pokemons.payload);
    console.log(pokemons);

    const RenderCards = () => {
        return pokemons && pokemons.map((ele,ind) => {

            return (
            <Card 
            name = {ele.name}
            type = {ele.type}
            type2 = {ele.type2}
            img = {ele.img}
            id = {ele.id}
            />
            )
        })
    };

    return (
        <div>
            {RenderCards()}
        </div>
    )

};

export default Cards;