import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 15

  //useState() - return 2 value in form of array first being the value or the parameter passed in useState() and 2nd the function to be called and the changes

  let [count,setCount] = useState(15);

  const addValue = ()=>{
    // console.log("clicked",Math.random().toFixed(2))
    // count = count+1;
    if(count<20)setCount(count+1)
    console.log("clicked ",count)
  }

  const remValue = ()=>{
    if(count>1)setCount(count-1)
    console.log(count)
  }

  return (
    <>
      <h1>Counter Page</h1>
      <h2>Count: {count}</h2>


      <button onClick={addValue}>Counter Increase : {count}</button>
      <br />
      <button onClick={remValue}>Counter Decrease : {count}</button>

      <p>Footer: {count}</p>
    </>
  )
}

export default App


//this is the use of react it changes all the occurence of that var 
//if to do the same thing in JS we had to get all tags id or class and make changes for each tag on updations