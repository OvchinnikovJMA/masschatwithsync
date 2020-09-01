import React, {useState, useEffect} from 'react';

import {db} from './firebase/firebase'

import Chat from './Components/Chat';
import MessageForm from './Components/MessageForm';

function App() {
  const [Messages, SetMessages] = useState([]);
  const applyMessages = (message) => {
    db.push(message);
  }

  useEffect(() => {
    if(Messages.length === 0){
      db.off();
      db.on('value', (snapshot) => {
        SetMessages(Object.values(snapshot.val()));
        console.log('цикл'); 
      })    
    }
      
  })

  return (
    <div className="dialogs">
        <Chat data={Messages} />
        <MessageForm add={applyMessages}/>
    </div>
  );
}

export default App;
