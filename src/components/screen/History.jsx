import React from 'react'

function History({data}) {


// const refresh  = (historyData) =>{
//   localStorage.setItem('history', JSON.stringify(historyData))
//   console.log(historyData)  
// }

// useEffect(()=>{
//   const newData = JSON.parse(localStorage.getItem('history'));
//   setSaveData(newData)
// },[])
console.log(data)
  return (
    <div className='text-white'>
      {data.map((state,id) => (
        state.listDeleted ? 
                  <>
                    <ul>
                      <li className='checkLi' key={id}>
                          <h2>{state.text}</h2>
                          <h2>{state.currentDate}</h2>
                      </li>
                    </ul>
                  </> : ''
              ))}
    </div>
  )
}

export default History