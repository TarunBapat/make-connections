import React from 'react';
import Tour from './Tour';

const Tours=({tours,removeTour})=>{

return(<section>
	<h2 className="connections-header">Lets Make Connections</h2>
	<div className="connections-list">
	{tours.length===0?<h2 className="no-connections">No Connections Left</h2>:tours.map((tour)=>{
		return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
	})}
	</div>
</section>)
}

export default Tours;
