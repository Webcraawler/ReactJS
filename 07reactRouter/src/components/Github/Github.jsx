import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github()
{
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Webcraawler")
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="bg-slate-700 text-white text-center p-4 text-3xl m-4 flex items-center space-x-2 justify-center">
        <img className="rounded-lg max-w-20" src={data.avatar_url} alt="" />      
        <h3>Github Followers: {data.followers}</h3>

        </div>
    )
}

export default Github;

export const gitInfoLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Webcraawler")

    return response.json()
}