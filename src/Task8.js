import React, { useState } from 'react';

function Task8() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  const addNote = () => {
    const newNote = {
      title: `Нотатка ${notes.length + 1}`,
      content: text,
      created: new Date().toLocaleTimeString(),
    };
    setNotes([...notes, newNote]);
    setText('');
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const editNote = (index, content) => {
    const newNotes = [...notes];
    newNotes[index].content = content;
    setNotes(newNotes);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addNote}>Додати нотатку</button>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>{note.created}</p>
          <button onClick={() => deleteNote(index)}>Видалити</button>
          <button onClick={() => editNote(index, prompt('Редагувати нотатку', note.content))}>Редагувати</button>
        </div>
      ))}
    </div>
  );
}

export default Task8;
