import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { removeTodo } from '@/redux/feature/TodoSlice'
 type TTodoCart = {
  id:string,
  title:string,
  description:string,
  isCompleted:boolean,
}
const TodoCart = ({title,description,id,isCompleted ,item}:TTodoCart) => {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className='bg-white p-3 rounded-lg flex justify-between items-center mt-2'>
            <input type="checkbox" name="" id="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>{isCompleted ? <p className='text-green-700'>Done</p> : <p className='text-red-700'>pending</p>}</p>
            <div className='flex gap-2 items-center'>
                <Button className='bg-red-600' onClick={()=> dispatch(removeTodo(id))}>Delete</Button>
                <Button className=''>Edit</Button>
            </div>
    </div>
  )
}

export default TodoCart