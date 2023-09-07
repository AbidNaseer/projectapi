"use client"
import { useState } from "react"
import Card from "./(components)/card/page";
import axios from 'axios';

function home() {
  const [data, setData] = useState([])
  const loadDataFromServer = async () => {
    let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
    setData(response.data)
    console.log("response", response.data)
  }
  const removeData = () => {
    console.log("its working")
  }
  return (
    <div className="container-fluid mt-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-2">
          <button class="btn btn-outline-success bg-primary" onClick={loadDataFromServer}>Show data</button>
          </div>
          <div className="col-10">

            {data.map((item ,index) => {
              return (
                <div className="container-fluid ">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col-2"></div>
                      <div className="col-10">
                      <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 sm-bg-red">
                  <Card title={item.login}  url={item.url} />
                </ div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default home

