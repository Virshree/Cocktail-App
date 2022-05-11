import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Cocktail.css';

function Cocktail({title}) {

    const [details,setDetails]=useState([]);
    //const[filtertext,setFilterText]=useState();

    useEffect(()=>{
        fetchUrl();
    },[]);
    const fetchUrl=async()=>{
        const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
       const data1= await axios.get(url);
       //console.log(data1.data.drinks);
       setDetails(data1.data.drinks);
    }

  return (
    <div className='cocktail-container'>
        <div className='cocktail'>
            {details.filter((item)=>item.strDrink.toLowerCase().includes(title)).map((item)=>(
        <div className='items' >
                    <p><img src={item.strDrinkThumb} width="260" height="220" alt="drinklogo" style={{marginTop:'0px'}}/></p>
                    <h1>{item.strDrink}</h1>
                    <h2 style={{color:'red',fontSize:'25px'}}>{item.strGlass}</h2>
                    <h4 style={{color:'orange',fontSize:'23px'}}>{item.strIngredient1}</h4>
                </div>
            ))}
          
        </div>
          
    </div>
  )
}

export default Cocktail