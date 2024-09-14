/* eslint-disable react/prop-types */
import './Header.css';

function Header({ searchTerm, setSearchTerm, onAddNote }) {
  return (
    <header className="app-header">
      <h1 className="app-title">Aplikasi Catatan</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari catatan..."
          className="search-input"
        />
        <button onClick={onAddNote} className="add-note-btn">Add Note</button>
      </div>
    </header>
  );
}

export default Header;
