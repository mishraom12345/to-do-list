import { useState } from 'react'
import './Todo.css'
function Todo(){
    const [activity,setactivity]=useState('')
    const [listitem,setlistitem]=useState([])

    function addactivityHandler(){
        // setlistitem([...listitem,activity])
        // setactivity('')
        setlistitem((listitem)=>{
            const updatedlist = [...listitem,activity]
            return updatedlist
        })
        setactivity('')
    }
    function removeHandler(index){
        const updatedlist = listitem.filter((ele,id)=>{
            return index!=id
        })
        setlistitem(updatedlist)
    }
    function DelteAll(){
        setlistitem('')
    }
    return(
       <div className='header'>
        <h1 >To Do list </h1>
        <input type='text' value={activity} onChange={(e)=>{
            setactivity(e.target.value)
        }}/>
        <button onClick={addactivityHandler}>Add</button>
        <h2>Here is your to do list</h2>
        {listitem!=[]&& listitem.map((item,index)=>{
            return(
                <>
                <p key = {index}>
                    {item}
                    <button onClick={()=>removeHandler(index)}>remove</button>
                </p>
                </>
            )
        })}
        {listitem.length>=1&&<button onClick={DelteAll}>Remove all</button>}

       </div>
    )
}

export default Todo