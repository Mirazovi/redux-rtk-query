import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { removeTodo } from '@/redux/feature/TodoSlice'
 type TTodoCart = {
  id:string,
  title:string,
  description:string,
}
const TodoCart = ({title,description,id}:TTodoCart) => {
  const dispatch = useDispatch();
  return (
    <div className='bg-white p-3 rounded-lg flex justify-between items-center mt-2'>
            <input type="checkbox" name="" id="" />
            <p>{title}</p>
            <p>{description}</p>
            <p>Time</p>
            <div className='flex gap-2 items-center'>
                <Button className='bg-red-600' onClick={()=> dispatch(removeTodo(id))}>Delete</Button>
                <Button className=''>Edit</Button>
            </div>
    </div>
  )
}

export default TodoCart