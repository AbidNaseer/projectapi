"use client"
import { useState } from "react";
import axios from "axios";
import Card from "./(components)/card/page";


function home() {
  const [userName, setUserName] = useState(null)
  const [followers, setFollowers] = useState([])
  const [data, setData] = useState(null)
  
  const onChangeHandler = (e) => {
      setUserName(e.target.value)
  }
  const onClickHandler =async () => {

      setFollowers([])
      let response = await fetch(`https://api.github.com/users/${userName}`)
        response = await response.json()
        setData(response)
        console.log(response);


  }
  const onFollowerHandler = async () => {
      let response = await axios.get(data.followers_url ,{next :{revalidate:3000}})
      console.log("response", response.data );
      setFollowers(response.data)

  }
return(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          
          <input type="text" placeholder="Search here" onChange={onChangeHandler} />
          <button className="btn btn-success" onClick={onClickHandler}> search </button>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
{data &&
            
            <Card src={data.avatar_url} bio={data.login} handler={onFollowerHandler} />
            }

{followers.length >= 1 &&


<>   
    {followers.map((element) => {
        return (
          <Card title={ element.login} src={element.avatar_url} /> 
        )
      })}

</>
}
  </div>
)
}

export default home

