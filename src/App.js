import React from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my note",
    date : "45/45/5"
  },
  {
    id: nanoid(),
    text: "This is my pehla note",
    date : "45/45/5"
  },
  {
    id: nanoid(),
    text: "This is my dusra note",
    date : "45/45/5"
  },
  {
    id: nanoid(),
    text: "This is my teesra note",
    date : "45/45/5"
  }]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes); 
  }

  return ( 
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
};
export default App;
