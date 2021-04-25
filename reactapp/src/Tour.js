import React,{useState} from 'react';

const Tour=({id,image,bio,name,age,occupation,removeTour})=>{

	const [readmore,setReadmore]=useState(false);
	return(
		<article className="single-tour">
		<div>
		<img src={image} alt=""/>
		</div>
		<footer>
		<div className="tour-info">
		<h4>{name}</h4>
		<h4>{occupation}</h4>
		<h4 className="tour-price">{age}</h4>
		<p>{readmore?bio:bio.substring(0,100)}
		<button onClick={()=>setReadmore(!readmore)}>{readmore?'show less':'readmore'}</button>
		</p>
		
		</div>
		<button className="delete-btn" onClick={()=>removeTour(id)}>Not interested</button>
		</footer>
		</article>
		)
}

export default Tour;