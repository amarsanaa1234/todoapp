import React, { useEffect, useState } from 'react'

function History({bigData}) {

const [historyData, setHistoryData] = useState([])


// setHistoryData(bigData)
const refresh  = (bigData) =>{
  // setHistoryData([...historyData, bigData.map(m=>{
  //     return m
  //   })])
  //   console.log(bigData)
  localStorage.setItem('history', JSON.stringify(bigData))
}

useEffect(()=>{
  let newData = JSON.parse(localStorage.getItem('history'));
  setHistoryData([...historyData, newData])
},[])
console.log(historyData)

  return (
    <div className='text-white'>
    <button onClick={()=>{refresh(bigData)}} >refresh</button>
      {historyData.map((elem, id)=>
      <div>
          <ul>
            <li key={id}>
              {elem.text},{elem.currentDate}
            </li>
          </ul>
      </div>
      )}
    </div>
  )
}

export default History