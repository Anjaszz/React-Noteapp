/* eslint-disable react/prop-types */
import NoteItem from "../NoteItem/NoteItem";
import "./NoteList.css"; 

const NoteList = ({ notes, deleteNote, archiveNote }) => {
  return <div className="note-list">{notes.length === 0 ? <p className="nothing">Tidak ada catatan.</p> : notes.map((note) => <NoteItem key={note.id} note={note} deleteNote={deleteNote} archiveNote={archiveNote} />)}</div>;
};

export default NoteList;
