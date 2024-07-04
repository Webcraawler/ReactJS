import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();
    return(
        <div className="mx-2 text-center bg-slate-700 text-white text-3xl p-4">User: {userid} </div>
    )
}

export default User;