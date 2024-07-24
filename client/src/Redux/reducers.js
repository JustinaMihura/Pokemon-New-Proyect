import {createSlice} from "@reduxjs/toolkit"


const reducer = createSlice({
    name : "counter",
    
    initialState : {
        counter :0,
        pokemons : []
    },

    /*no son acciones , son reducer que cambian el estado global(store); 
    se puede hace la acion diretamentente , pero es preferible crear thunks. */

    reducers : {
       
        getPokes : (state, action) => {
            state.pokemons = action;
        },
        
    }
})


export default reducer

