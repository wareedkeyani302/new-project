import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    
    updateTask: (state, action) => {
      const {id, text} = action.payload;
      const taskToUpdate = state.list.find(task => task.id ===id);
      if (taskToUpdate) {
        taskToUpdate.text = text;
      }
    },
  },
});

export const { addTask, removeTask,updateTask } = taskSlice.actions;
export default taskSlice.reducer;