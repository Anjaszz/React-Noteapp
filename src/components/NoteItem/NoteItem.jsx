/* eslint-disable react/prop-types */
import './NoteItem.css'; 

const NoteItem = ({ note, deleteNote, archiveNote }) => {
  return (
    <div className="note-item glass-card">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <div className="note-item-actions">
        <button className='archive-btn' onClick={() => archiveNote(note.id)}>
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button className='delete' onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
