import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
  return  (
   <div>
    { robots.map( (robot, i) => 
    <Card key={i} name={robot.name} id={robot.id} email={robot.email}  />
    )}
   </div>
   )
 }
 
export default CardList