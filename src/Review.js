import React, { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex]=useState(1);
  const{name,job,image,text}=people[index]
  
  const checkNumber=(number)=>
  {
    if(number>people.length-1)
    {
      return 0;
    }
    else if(number<0){
        return people.length-1;
    }
    return number;
  }
  const prevPerson=()=>
  {
    setIndex((index)=>
    {
      let newIndex=index-1;
      return checkNumber(newIndex);
    }
    )
  }
  const nextPerson=()=>
  {
    setIndex((index)=>
    {
      let newIndex=index+1;
      return checkNumber(newIndex);
    }
    )
  }
  
  const randomPerson=()=>
  {
    let newNumber = Math.floor(Math.random()*people.length)
    if(newNumber===index)
    {
      newNumber=index+1
    }
    setIndex(checkNumber(newNumber))
  }
  
  return (
    
      <article className='review'>
        <div className="img-container">
          <img src={image} alt={name} className='person-img'></img> 
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        {/* <button onClick={()=>setIndex(index-1)}><FaChevronLeft/></button>&nbsp;&nbsp;<button onClick={()=>setIndex(index+1)}><FaChevronRight/></button> */}
        <div className='button-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>
        </div>
        <article className='random-btn' onClick={randomPerson}>surprise me</article>
      </article>
    
  );
}

export default Review;
