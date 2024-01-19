import React from 'react'
import TaskForm from '../Components/Task/TaskForm';
import TaskList from '../Components/Task/TaskList';

const Home = () => {
  return (
        <div className='container'>
            <h1 className='heading'>Task Manager with Redux Toolkit</h1>
            <div className='home-content'>
            <TaskForm />
            <TaskList />
            </div>
        </div>
  )
}

export default Home;