/* eslint-disable react/prop-types */

import  { useState } from 'react';
import './NoteForm.css'; 

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [characterLimit, setCharacterLimit] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addNote({
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString()
      });
      setTitle('');
      setBody('');
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitle(value);
      setCharacterLimit(50 - value.length);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Judul catatan"
        className="note-input"
        required
      />
      <p className="character-limit">Karakter tersisa: {characterLimit}</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi catatan"
        className="note-textarea"
        required
      />
      <button type="submit" className="note-submit-btn">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;
