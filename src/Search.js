import React from 'react'
import './Search.css';
import { useState } from 'react';
import Cocktail from './Cocktail';

function Search() {
    const[title,setTitle]=useState("");
  return (
    <div className='search-box'>
        <div className='search-container'>
            <h2>Serach for your Favorite Cocktail</h2>
            <input type='text' value ={title} 
            onChange={(e)=>setTitle(e.target.value)}
            size='50' />
           
        </div>

    <Cocktail  title={title} />
    </div>
  )
}

export default Search