import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'



export const getBook = createAsyncThunk("book/getBook", async()=>{
    const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA')
    return res.data.items
})

const bookIdentity = createEntityAdapter({
    selectId: (book) => book.id
})

const bookSlice = createSlice({
    name: 'book',
    initialState: bookIdentity.getInitialState({
        isLoading:false,
        isError: null
    }),
    extraReducers:{
        [getBook.pending] : (state)=>{
            state.isLoading= true
        },
        [getBook.fulfilled] : (state, action)=>{
            state.isLoading = false
            bookIdentity.setAll(state, action.payload)
        },
        [getBook.rejected] : (state, action)=>{
            state.isLoading = false
            state.isError = action.error;
        }
    }
})

export const bookSelect = bookIdentity.getSelectors(state => state.book)

export default bookSlice.reducer

