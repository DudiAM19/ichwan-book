import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {getBook} from './features/BookSlice';
import {bookSelect} from './features/BookSlice'



function App() {
  const dispatch = useDispatch()
  const books = useSelector(bookSelect.selectAll)
 
  useEffect(()=>{
    dispatch(getBook())

    // axios.get('https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA').then(res => {
    //   setboak(res.data.items)
    // })
  },[dispatch])
  // console.log(book)
  return (
    <div >
      <h1>Hello World</h1>
      {books.map(items => (
        <div key={items.id}>{items.volumeInfo.title}</div>
      ))}
    </div>
  );
}

export default App;
