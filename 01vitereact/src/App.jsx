
// to import our func in app
import Create from "./create"

function App() {
  const content = "Adding JavaScript"
  return (
    <>
      <h1>Hello World using Vite || {content}</h1>
      <Create />
    </>
  )
}

export default App


// {} -- this is called evaluated expression 
//this means we cannot write whole of expression in the braces just final outcome 
//we do our js code above that and the final outcome can be passed in these braces
