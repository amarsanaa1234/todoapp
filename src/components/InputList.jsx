import React, { useState } from 'react'
import { BsArrow90DegDown } from 'react-icons/bs';

function InputList({onSubmit}) {
  const [state, setState] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  return (
    <div className='flex'>
            <input 
                type='text' 
                name='text'
                value={state}
                placeholder="Create a new todo..."
                onChange={(e)=>{ setState(e.target.value)}}
                className='text-white border-solid border-black border-2 rounded-l-3xl w-80 h-12 text-3xl bg-[#25273c]'
                />
            <input 
              className='text-white border-solid border-black border-2 w-80 h-12 text-3xl bg-[#25273c]'
              type='date' 
              date={selectedDate}
              onChange={e => setSelectedDate(e.target.value)} />
            <button className='bg-green-600/95 w-20 flex justify-center items-center rounded-r-3xl' 
             disabled={state.length === 0} 
             onClick={() => onSubmit(state, selectedDate)}>
                <BsArrow90DegDown className='text-3xl text-slate-50'/>
            </button>
    </div>
  )
}

export default InputList