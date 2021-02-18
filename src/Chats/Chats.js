import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className="chats">
      <Chat 
        name='Tony'
        message='Hello Welcome'
        timestamp="35 minutes ago"
        profilePic="https://dailysuperheroes.com/wp-content/uploads/2020/02/tony-stark.jpg"
      />
      <Chat 
        name='James'
        message="what's up!"
        timestamp="1 minutes ago"
        profilePic="https://i.insider.com/59884b2227fa6b34cc5d701d?width=1100&format=jpeg&auto=webp"
      />
      <Chat 
        name='Nicole'
        message='It is good to see you'
        timestamp="3 days ago"
        profilePic=""
      />
      <Chat 
        name='Harry Potter'
        message='Hello I am Harry Potter'
        timestamp="3 days ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg"
      />
    </div>
  )
}

export default Chats
