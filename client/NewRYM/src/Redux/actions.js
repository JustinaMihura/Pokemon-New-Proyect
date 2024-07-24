import axios from "axios";
import reducer from "./reducers";

const {getPokes} = reducer.actions;
const baseUrl = "http://localhost:3001"


export const getPokemons = () => {

    return async (dispatch) => {

        try {

        const {data} = await axios.get(`${baseUrl}/pokemons`);

        if(data) {

            dispatch(getPokes(data));
        }
        

        } catch (error) {
            console.log("algo paso");
        }
    }
   
}