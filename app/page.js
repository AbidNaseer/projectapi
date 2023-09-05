"use client"
import { useState } from "react"
import Card from "./(components)/card/page";
import axios from 'axios';

function home() {
  const [data , setData]= useState([])
  const loadDataFromServer = async ()=> {
    let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
    setData(response.data)
    console.log("response", response.data)
  }
  const removeData =()=>{
    console.log("its working")
  }
  return (<>
      {data.map((item,i)=>{
            return (
              <div >
                <Card title={item.login} key={item.i} url={item.url}  />
              </ div>
            )
          })}
          <button onClick={removeData} className="rounded bg-slate-400 text-white text-center p-2/4 m-2 ">removeData</button>
          <button onClick={loadDataFromServer} className="rounded bg-purple-400 text-white text-center p-2/4 m-2 ">getData</button>
    </>
  )
}

export default home