import React from 'react'
import { Button } from './ui/button'

const TodoCart = () => {
  return (
    <div className='bg-white p-3 rounded-lg flex justify-between items-center'>
            <input type="checkbox" name="" id="" />
            <p>Title Name</p>
            <p>Description</p>
            <p>Time</p>
            <div className='flex gap-2 items-center'>
                <Button className='bg-red-600'>Delete</Button>
                <Button className=''>Edit</Button>
            </div>
    </div>
  )
}

export default TodoCart