import {configureStore} from '@reduxjs/toolkit';
import bookReducer from './../features/BookSlice'


export const store = configureStore({
    reducer: {
        book: bookReducer
    }
})
