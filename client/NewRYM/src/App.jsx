
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import reducer from "./Redux/reducers"
import { useEffect } from 'react'
import { getPokemons } from './Redux/actions'
import Home from "./Components/Home/Home.jsx"

function App() {
  
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const {increment, getPokes} =reducer.actions;

  useEffect(() => {
    dispatch(getPokemons())
  },[])

  return (
    <>
    {/* <button onClick={() => {dispatch(increment())}}></button>
    <p>{counter}</p> */}
    <Home/>
     
    </>
  )
}

export default App
