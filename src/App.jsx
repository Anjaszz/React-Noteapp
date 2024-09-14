import React, { useState } from "react";
import NoteList from "./components/NoteList/NoteList";
import NoteForm from "./components/NoteForm/NoteForm";
import Header from "./components/Header/Header";
import { getInitialData } from "./utils";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState( getInitialData());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const addNote = (note) => {
    setNotes([...notes, note]);
    setIsModalOpen(false); 
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddNote={() => setIsModalOpen(true)} 
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <NoteForm addNote={addNote} />
            <button onClick={() => setIsModalOpen(false)} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}

     
        <NoteList notes={filteredNotes} deleteNote={deleteNote} archiveNote={archiveNote} />
    </>
  );
}

export default App;
