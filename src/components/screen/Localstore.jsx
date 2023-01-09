import React, {  useEffect, useState } from 'react'

function Localstore({mongo}) {

  const [data, setData] = useState([])
  const [state, setState] = useState([])

  // useEffect(() =>{
  //   setData([...data, mongo])
  //   localStorage.setItem('lists', JSON.stringify(data))
  //   const myContent = localStorage.getItem('lists')
  //   const d = myContent !== null ? JSON.parse(myContent) : []
    
  // },[data])

  const refresh = (mongo) =>{
    localStorage.setItem('lists', JSON.stringify(mongo))
    const myContent = localStorage.getItem('lists')
    const d = myContent !== null ? JSON.parse(myContent) : []
    setData(d)
    // console.log(data)
  }

  

  return (
    <div>
      <button onClick={()=>{refresh(mongo)}}>refresh</button>
      {data.map((elem)=>
      <div>
          <ul>
            <li>
              {elem.id}{elem.text}{elem.currentDate}
            </li>
          </ul>
      </div>
      )}
    </div>
  )
}

export default Localstore