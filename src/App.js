import React, {useState, useEffect} from 'react';

/**
 * Импорт необходимого каталога из базы данных, который содержит в себе все сообщения чата  
 */
import {db} from './firebase/firebase'

import Chat from './Components/Chat';
import MessageForm from './Components/MessageForm';

function App() {
  /**
   * state. Хранит массив объектов сообщений
   * @type {Array}
   */
  const [Messages, SetMessages] = useState([]);
  /**
   * Функция добавления message в каталог db базы данных
   * @param {{text: string}} message 
   */
  const pushMessages = (message) => {
    db.push(message);
  }
  /**
   * Удаляет существующие listener и добавляет listener при первом рендере компонента. 
   * listener обновляет значение Messages каждый раз, когда db изменяется
   */
  useEffect(() => {
    if(Messages.length === 0){
      db.off();
      db.on('value', (snapshot) => {
        SetMessages(Object.values(snapshot.val()));
      })    
    }
      
  })

  return (
    <div className="dialogs">
        <Chat data={Messages} />
        <MessageForm add={pushMessages}/>
    </div>
  );
}

export default App;
