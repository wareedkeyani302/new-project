import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../../Redux/Slice/taskSlice';
import { updateTask } from '../../Redux/Slice/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [updatedTaskText, setUpdatedTaskText] = useState('');
  const tasks = useSelector(state => state.tasks.list);

  const handleRemoveTask = id => {
    dispatch(removeTask(id));
  };
  const handleUpdateTask = () => {
    if (updatedTaskText.trim()) {
      dispatch(updateTask({ id: editingTaskId, text: updatedTaskText }));
      setEditingTaskId(null);
      setUpdatedTaskText('');
    }
  };

  return (
    <ul className='task-list'>
    {tasks.map(task => (
      <li key={task.id} className={task.completed ? 'completed' : ''}>
        {editingTaskId === task.id ? (
          <div className='update-task'>
            <input
              type='text'
              value={updatedTaskText}
              onChange={e => setUpdatedTaskText(e.target.value)}
            />
            <button className='update-button' onClick={handleUpdateTask}>Update</button>
          </div>
        ) : (
          <div className='Show-task'>
            <span>{task.text}</span>
            <button className='edit-button' onClick={() => setEditingTaskId(task.id)}>Edit</button>
            <button className='remove' onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </div>
        )}
      </li>
    ))}
  </ul>
  );
};

export default TaskList;