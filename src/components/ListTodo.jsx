import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import {MdOutlineDeleteOutline} from 'react-icons/md'
import {GrRadialSelected} from 'react-icons/gr'


function ListTodo({deleteList, mongo, checkIcon}) {


  return (
    <>
        <ul className='flex-col text-white'>
            {mongo.map((state,id) => (
                <li className='checkLi' key={id}>
                <button onClick={()=>checkIcon(state.id)}>
                    {
                        state.complete? 
                            <BsCheckCircle className='checkIcon' />:
                            <GrRadialSelected className='checkIcon'/>
                    }
                </button>
                    <h2 className={'checkText' + (state.complete ? ' line-through' : '')}>{state.text}</h2>
                    <h2 className={'checkText' + (state.complete ? ' line-through' : '')}>{state.currentDate}</h2>
                    <button onClick={()=>{deleteList(state)}} className='mr-6 mb-3'>
                        <MdOutlineDeleteOutline className='checkIcon'/>
                    </button>
                </li>
            ))}
            </ul>
    </>
  )
}

export default ListTodo