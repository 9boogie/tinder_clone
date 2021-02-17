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
        name='Park Bo Young'
        message='Annyung!'
        timestamp="3 days ago"
        profilePic="https://static.wikia.nocookie.net/drama/images/2/2b/Park_Bo_Young.jpg/revision/latest/top-crop/width/360/height/450?cb=20170404103859&path-prefix=de"
      />
    </div>
  )
}

export default Chats
