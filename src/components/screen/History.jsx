import React, { useEffect, useState } from 'react'

function History({data}) {



const [groupData, setGroupData] = useState([])
const [swipe, setSwipe] = useState(true)

const groupBy = data.reduce((state, item)=>{
  (state[item.currentDate]=state[item.currentDate] || []).push(item)
  return state
},[])

useEffect(() => {
  setGroupData(groupBy)
  setSwipe(!swipe)
}, [])

// console.log(groupData,'data')

return (
    <div className='text-white'>
      <div className='flex justify-around w-screen'>
        {Object.keys(groupData).map((item, i)=>(
          <ul key={i} className='text-2xl'>
          {item}
            {groupData[item].map((state, id) => (
              <li className='m-2' key={id}>
                <h2 className={'text-2xl ml-3 border-b-2 border-zinc-500 w-full' + (state.complete ? ' line-through' : '')}>{state.text}</h2>
            </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default History