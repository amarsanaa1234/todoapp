import React, { useEffect, useState } from 'react'
import InputList from '../InputList';
import ListTodo from '../ListTodo';
import History from './History';


const Main = () => {
    
    const [state, setState] = useState('')
    const [data, setData] = useState([])
    const [count ,setCount] = useState(1)
    const [swipe, setSwipe] = useState(true)

    const [bigData, setBigData] = useState([])

    const onSubmit = (value, date) =>{
        
        const newItem = {
            id: data.length + 1,
            text: value,
            currentDate: date,
            complete: false
        }
        setState("")
        setCount(count + 1)
        setData([...data, newItem])
        localStorage.setItem('localTasks', JSON.stringify([...data, newItem]))
    }
    useEffect(()=>{
        if(localStorage.getItem('localTasks')){
            const list = JSON.parse(localStorage.getItem('localTasks'))
            setData(list)
        }
    },[])
    


    const deleteList = (text) =>{
        setBigData([...bigData, text])
        const Todo = data.filter((list) => {
            setCount(count - 1)
            return list !== text 
        })
    setData(Todo)
    }


    const allDelete = (text) =>{
        const all = data.filter((newList) => {
            setCount(0)
            if(newList === text){
                return ''
            }
        })

        setBigData(data.map(m=>{
            return m
        })
        )
        setData(all)
        
    }


    const checkIcon = (id) =>{
        setData(
            data.map(m=>{
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
            localStorage.setItem('localTasks', JSON.stringify(data))
    },[data])

    return (
    <div className='p-10 flex justify-center flex-col items-center'>
        {swipe ? 
        <>
            <InputList onSubmit={onSubmit}/>
            
            <div className='flex w-1/2 rounded-2xl bg-[#25273c] mt-20 flex-col'>
                <ListTodo deleteList={deleteList} data={data} checkIcon={checkIcon}/>
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
        : <History bigData={bigData}/> }
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