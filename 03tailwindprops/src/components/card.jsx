import React from 'react'

//props are the argument passed from App.jsx so that we can change and resuse the same components by changing the passed arguments


//if the function is just called and no arg is passed props will be empty
//string argument can be passed directly 
//array and objects need to declared first and then can be passed as evaluated expression {}

//props was generally used and was accessed by props.argname but its better to deconstruct the obj so we dont have to use props. evertime

function Card({username, btnText="Visit Profile"}){

    console.log("props ",username)

    return(
        <div className="relative h-[400px] w-[300px] rounded-md mb-4">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left ">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    )
}

export default Card