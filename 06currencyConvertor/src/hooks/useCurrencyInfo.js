import {useState,useEffect} from 'react'


function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/527a57513be8bfebf635e795/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res["conversion_rates"]))
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;


//creation of custom hooks to use api's
