import React, { useState, useEffect } from 'react'
import './SidebarGuestBook.css'

function SidebarGuestBook() {
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  // Carrega as mensagens do localStorage ao iniciar
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('guestbook')) || [];
    setGuestbookEntries(savedEntries.slice(-6)); // só as últimas 6
  }, []);

  const handleGuestbookSubmit = () => {
    if (newEntry.trim() === '') return;

    const updatedEntries = [...guestbookEntries, newEntry].slice(-6);
    setGuestbookEntries(updatedEntries);
    setNewEntry('');

    // Salva no localStorage
    localStorage.setItem('guestbook', JSON.stringify(updatedEntries));
  };

  return (
    <div className="guestbook-section">
      <h3 className='title'>guestbook</h3>
      <div className="guestbook-list">
        {guestbookEntries.length === 0 && <p>no messages...</p>}
        {guestbookEntries.map((entry, i) => (
          <p key={i}>✿ {entry}</p>
        ))}
      </div>
      <input
        className='input-section'
        type="text"
        placeholder="leave a message"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <button className="button-section" onClick={handleGuestbookSubmit}>✿ send</button>
    </div>
  )
}

export default SidebarGuestBook;