import React, { useEffect, useState } from 'react'
import InputList from '../InputList';
import ListTodo from '../ListTodo';
import History from './History';


const Main = () => {
    
    const [state, setState] = useState('')
    const [mongo, setMongo] = useState([])
    const [count ,setCount] = useState(1)
    const [swipe, setSwipe] = useState(true)
    
    const onSubmit = (value, date) =>{
        
        const newItem = {
            id: mongo.length + 1,
            text: value,
            currentDate: date,
            complete: false
        }
        setState("")
        setCount(count + 1)
        setMongo([...mongo, newItem])
        localStorage.setItem('localTasks', JSON.stringify([...mongo, newItem]))
    }
    useEffect(()=>{
        if(localStorage.getItem('localTasks')){
            const list = JSON.parse(localStorage.getItem('localTasks'))
            setMongo(list)
        }
    },[])
    


    const deleteList = (text) =>{
        const Todo = mongo.filter((list) => {
            setCount(count - 1)
            return list !== text
        })
        setMongo(Todo)
    }

    const allDelete = (text) =>{
        const all = mongo.filter((newList) => {
            setCount(0)
            if(newList === text){
                return ''
            }
        })
        setMongo(all)
        
    }
    const checkIcon = (id) =>{
        setMongo(
            mongo.map(m=>{
                if(m.id === id){
                    return {
                        ...m,
                        complete: !m.complete
                    }
                }
                return m
            })
        )
        
    }
    useEffect(()=>{
            localStorage.setItem('localTasks', JSON.stringify(mongo))
    },[mongo])

    return (
    <div className='p-10 flex justify-center flex-col items-center'>
        {swipe ? 
        <>
            <InputList onSubmit={onSubmit}/>
            
            <div className='flex w-1/2 rounded-2xl bg-[#25273c] mt-20 flex-col'>
                <ListTodo deleteList={deleteList} mongo={mongo} checkIcon={checkIcon}/>
                <div className='footer_section'>
                    <div className='text-white text-2xl w-1/2 pl-5'>
                        {count} items
                    </div>
                    <button className="clear-btn" onClick={()=>{allDelete(state)}}>
                        Clear Complete
                    </button>
                </div>
            </div>
        </>
        : <History mongo={mongo}/> }
        <button 
            className='swipe-btn hover:bg-violet-600 active:bg-violet-700 
                focus:outline-none focus:ring focus:ring-violet-300'
            onClick={() => setSwipe(!swipe)}
            >
            history
      </button>
    </div>
  )
}

export default Main