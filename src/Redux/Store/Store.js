import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../Slice/taskSlice';

const Store = configureStore ({
    reducer: {
        tasks: taskReducer,
    },
})
export default Store;