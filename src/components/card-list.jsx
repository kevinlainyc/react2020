import React from 'react';
import { Card } from './card';

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster=>(
      <Card key={monster.id} name={monster.name} />
    ))}
  </div> 
)