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

    // if(count<20)setCount(count+1)
    // if(count<20)setCount(count+1)
    // if(count<20)setCount(count+1)
    // if(count<20)setCount(count+1)
      
    //this is a interview ques now even tho we are calling it multiple time this all goes in as a batch as we studied in fibre since all the changes are made on the same var its goes as one

    //but if you want to incement it like this you can take a prevCounter that takes the last value and that is updated first and goes to next line of code

    //this func also take callback and using which we can take prev value and increment it first before moving ahead
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)


    
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