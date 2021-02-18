import React, { useState } from 'react';
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Harry',
      image: 'https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg',
      message: 'What up'
    },
    {
      name: 'Harry',
      image: 'https://pyxis.nymag.com/v1/imgs/171/429/c95b07becc2bef532d9669b4824ea4386f-08-harry-potter.rsquare.w1200.jpg',
      message: 'Can you spell the magic?'
    },
    {
      message: 'No i am muggle.'
    },
  ]);

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH HARRY ON 12/25/20</p>
      {messages.map(message => (
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar className='chatScreen__image' alt={message.name} src={message.image} />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )

      ))}
    </div>
  )
}

export default ChatScreen;
