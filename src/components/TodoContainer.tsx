import React from 'react'
import TodoCart from './TodoCart'
import { TodoModal } from './TodoModal'
import TodoFilter from './TodoFilter'
import { useSelector } from 'react-redux'

const TodoContainer = () => {
  const {value} = useSelector((state)=> state.todos)
  return (
    <div>
    <h1 className='text-center py-10 text-2xl font-semibold'>My Todo Redux RTK Query</h1>
    <div className='flex justify-between items-center p-3 max-w-7xl mx-auto z-10'>
        <TodoModal/>
        <TodoFilter/>
    </div>
    <div className='max-w-7xl mx-auto h-full bg-red-600 p-6 rounded-lg shadow'>
      {
        value?.map(item => <TodoCart key={item.id} title={item?.title} description={item?.description} id={item.id} inCompleted={item?.inCompleted}></TodoCart>)
      }
    </div>
    </div>
  )
}

export default TodoContainer