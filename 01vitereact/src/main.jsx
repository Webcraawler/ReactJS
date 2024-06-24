import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Myapp(){
  return(
    <>
    <h1>this is h1 tag</h1>
    <div>Hello |</div>
    </>
  )
}


//this wont work if pass it even tho this is how react reads the html cuz the render func of the react might have different syntax this is was our custom syntax that we wrote 

const ele = {
  type:"a",
  props:{
      href:"https://google.com",
      target: "_blank"
  },
  children:"Click to visit Google"
}

//but still if we want to pass object directly we can use React syntax

//first para it takes is the type in string format ,, second para is obj that is for the attribute ,, third para is just a string which is just the content of the tag

//--now as we saw in App.jsx where does the extra context from the expression goes if we are creating element throught react ,

//so its actually the 4th parameter in the createElement ,,that's why we cannot pass a full expression as it is just a parameter

const para = ' || the 4th parameter that is used to put js variable in html'

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com" , target:"_blank"},
  'Click to visit Google || using React syntax to create element',
  para
)


//since react converts the given html in object we call directly return an object instead of function which return html

//since () we dont need to write return
const newEle = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App />
    // App() ; since it is just a function this func call will also work

    // <Myapp />
    
    //passing react element
    ReactElement


    // newEle

)



//-----------------summary--------------------

//1. since <App /> is just a function we can write our own func and pass it in the render function and also since it is just a function App() -- this will work too

//2. Since render function is just converting the html in object format for the React to read , so we tried to pass ele but it won't work since React has its own syntax and and ele was our own custom syntax of the object

//3. but if we want to pass the object any how we can use React Syntax since react has a function called createElement this will create object that can be passed directly aboutt the paramenters are mentioned above

//4. then we saw how to add javascript varibale in the html by using evalute