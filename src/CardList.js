// import  React  from "react";
// import  Card  from "./Card";

// const CardList = ({robots}) => (
//   <div>
//     {robots.map(({id,name,email}) => (
//       <card
//       key={id}
//       id={id}
//       name={name}
//       email={email}
//      />
//     ))}
    
//   </div>
// );

// export default CardList;

import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {robots.map(({ id, name, email }) => (
      <Card 
        key={id} 
        id={id} 
        name={name} 
        email={email} 
      />
    ))}
  </div>
);

export default CardList;
