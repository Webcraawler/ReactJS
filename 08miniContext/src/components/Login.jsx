import React from "react";
import UserContext from "../context/UserContext";
import { useState,useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    //setUser is from UserContextProvider which is accessed here and the change will be propagated through this
    //we used setUser so that we can add 
    //if we wanted to access its value we could have used user from UserContextProvider
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
        {" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default Login
