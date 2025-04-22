import { React } from 'react';

const Card = ({id, Name, Email}) =>(
<div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5" >
  <img src={`https://robohash.org/ ${id}`}alt="robot"/>

  <div>
  <h2>{Name}</h2>
  <p>{Email}</p>
  </div>
</div>
)
export default Card;