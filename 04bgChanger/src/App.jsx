import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (

    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 bg-white px-4 py-1 rounded-2xl '>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("red")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "red" }}>

            Red

          </button>

{/* ------------------------------------------ */}

          <button
          onClick={()=>{
            setColor("green")
          }}
           className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "green" }}>

            Green

          </button>

{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("yellow")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}>

            yellow

          </button>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("blue")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "blue" }}>

            blue

          </button>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("pink")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "pink" }}>

            pink

          </button>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("grey")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "grey" }}>

            grey

          </button>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("purple")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "purple" }}>

            purple

          </button>
{/* ------------------------------------------ */}
          <button 
          onClick={()=>{
            setColor("lavender")
          }}
          className='outline-none px-4 py-2 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "lavender" }}>

            lavender

          </button>
{/* ------------------------------------------ */}
        </div>

      </div>

    </div>
  )
}

export default App







//in this project mainly learnt how onclick actually works 
//onclick takes a callback in which we define our useState function to change the variable 

//we can define the function and just pass the ref in onclick(like we did in the counter function) or we can make arrow function directly in the onclick as we did in this project

//also setColor or whatever useState function we make can take callback (we saw in the counter file)too or just arguments