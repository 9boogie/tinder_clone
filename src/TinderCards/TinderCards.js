import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Harry Potter',
      url: 'https://cnet2.cbsistatic.com/img/-5XzXScvtcX732sw1sYo_OCsI-8=/940x0/2016/09/19/79530bcb-7c95-4a67-bc33-2119c828e6e0/harry-potter-philosophers-stone.jpg'
    },
    {
      name: 'Malfoy',
      url: 'https://i.pinimg.com/736x/11/c5/a3/11c5a3dc93a313731e411fc0baf3e109.jpg'
    }
  ]);

  // BAD WAY
  // const people = [];
  // people.push('tim', 'max');

  // Good Way (React Way)
  // setPeple([...people, 'tim', 'max']);

  return (
    <div>
      <h1>Tinder Cards</h1>

      <div className="tinderCards__cardContainer">
        
      </div>

      {people.map(person => (
        <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
          <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
            <h3>{person.name}</h3>
          </div>
        </TinderCard>  
      ))}
    </div>
  )
}

export default TinderCards
