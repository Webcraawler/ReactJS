import { useState, useCallback, useEffect,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //useRef hook
  const passwordRef = useRef(null)
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(8,12)
    //?. is optional chaining without which it will work fine its is used in case an error occurs to takle that ?. chaining is used
    window.navigator.clipboard.writeText(pass)
    
  },[pass])

  // const copyToClipboard = useCallback(() => {
  //   if (passwordRef.current) {
  //     passwordRef.current.setSelectionRange(8, 12);
  //     passwordRef.current.focus();
  //     document.execCommand('copy');
  //   }
  // }, [pass]);

  //useCallback(fn,dependencies) -- this hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789";
    if(char) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1)

      // pass += str[randomIndex]
      pass += str.charAt(randomIndex)
    }

    setPass(pass)

  }, [length, number, char, setPass])


  //basically any changes in the dependency will change the function in it or reload that function body
  useEffect(()=>{
    passwordGenerator()
  },[length,number,char,passwordGenerator])



  // ---------------------styling part---------------------
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 text-orange-600 px-4 py-3 my-8'>
        <h1 className='text-center text-l text-white my-2'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className='outline-none flex bg-blue-700 text-white px-3 py-1 shrink-0 focus:bg-purple-500 focus:text-black '>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              id='scroll'
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor="scroll">Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numInp'
              className='cursor-pointer'
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label htmlFor="numInp">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={char}
              id='charInp'
              className='cursor-pointer'
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="charInp">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

