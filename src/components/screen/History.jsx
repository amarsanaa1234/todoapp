import React, { useEffect, useState } from 'react'

function History({mongo}) {


  const [data, setData] = useState([])
  // const refresh = (mongo) => {
  //   // const localStorageLength = localStorage.length;
  //   // localStorage.setItem(localStorageLength + 1, JSON.stringify(mongo))
  //   // let newData = []
  //   //   newData.push(localStorage.getItem(localStorage.length));
  //   setData(newData)
  // }
  useEffect(()=>{
    localStorage.setItem('history', JSON.stringify([mongo]))
    const newData = JSON.parse(localStorage.getItem('history'));
    setData(newData)
  },[])

  return (
    <div>
      {/* <button onClick={()=>{refresh(mongo)}}>refresh</button> */}
      {data.map((elem, key)=>
      <div>
          <ul>
            <li key={key}>
              {elem.text}
            </li>
          </ul>
      </div>
      )}
    </div>
  )
}

export default History