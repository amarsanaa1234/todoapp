import React, { useEffect, useState } from 'react'

function History({data}) {



const [groupData, setGroupData] = useState([])
const [swipe, setSwipe] = useState(true)

// console.log(data)

const groupBy = data.reduce((state, item)=>{
  (state[item.currentDate]=state[item.currentDate] || []).push(item)
  return state
},[])

useEffect(() => {
  setGroupData(groupBy)
  setSwipe(!swipe)
}, [])


console.log(groupData, '1234')

return (
    <div className='text-white'>
      <ul className='flex'>
        {data.map((state,id) => (
          state.listDeleted ?
                <li className='m-2' key={id}>
                    <h2 className='text-3xl ml-3 border-b-2 border-zinc-500 w-full'>{state.currentDate}</h2>
                    <h2 className={'text-2xl ml-3 border-b-2 border-zinc-500 w-full' + (state.complete ? ' line-through' : '')}>{state.text}</h2>
                </li>
                     : ''
                ))}
      </ul>
      <div>
        <button>nmg dar</button>          
          <div>
            {groupBy.map((item)=>{
              <ul>
              {console.log(item, '123124')}
              {/* {item.map((subItems, sIndex) => {
                <li key={sIndex}> {subItems.text} </li>;
                })} */}
              </ul>
            })}
          </div>
      </div>
    </div>
  )
}

export default History