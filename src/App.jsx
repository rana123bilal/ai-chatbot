import React from 'react'
import ChatBotIcon from './components/chatBotIcon'

function App() {
  return (
    <div className='container'>
      <div className='chatbot-popup'>
        <div className='chat-header'>
          <div className='header-info'>
            <ChatBotIcon />
            <h2 className='logo-text'>Chatbot</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
