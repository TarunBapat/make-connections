import React, {useState,useEffect} from 'react';
import Tours from './Tours';
import Tour from './Tour';
import './App.css';
import Loading from './Loading';
import data from './data';


const App=()=>{

const [loading,setLoading]=useState(true);
const [tours,setTours]=useState(data);

const removeTour=(id)=>{
    setTours(tours.filter((tour)=>tour.id!==id))
}
/*
const url = 'https://course-api.com/react-tours-project';
const fetchTours=async ()=>{
const response= await fetch(url);
const tours= await response.json();  
setTours(tours);
setLoading(false);
}



useEffect(()=>{
  console.log(data);
  fetchTours();
},[]);
if(loading){
  return <Loading/>
}
if(tours.length===0){
  return(
    <main>
      <h2>No Tours Left</h2>
      <button className="btn" onClick={fetchTours}>Refresh</button>
    </main>
    )
}
*/


  return(
    <div className="App">
    <Tours tours={tours} removeTour={removeTour}/>
    </div>
    )
}

export default App;
