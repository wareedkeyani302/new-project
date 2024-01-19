import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Slice/taskSlice';

const TaskForm = () => {

    const dispatch = useDispatch ();
    const [taskText, setTaskText] = useState ("");
    const handleAddTask = () => {
        if (taskText.trim()) {
          dispatch(addTask(taskText));
          setTaskText('');
        }
      };
  return (
    <div className='task-form'>
        <input type='text' placeholder='Add Task Here'
           value={taskText}
           onChange={e => setTaskText(e.target.value)}
       />
       <button className='task-button'  onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskForm;