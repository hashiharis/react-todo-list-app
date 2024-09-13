import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../components/todomodule/todoSlice'

export const store=configureStore({
    reducer:{
        todo:todoSlice,
    }
})