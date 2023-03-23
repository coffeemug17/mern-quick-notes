import { useState, useEffect, useRef } from 'react';
import * as notesAPI from "../../utilities/notes-api"
import NoteItem from '../../components/NoteItem/NoteItem';

export default function MyNotesPage() {

  const [notes, setNotes] = useState([]);

  useEffect(function() {
    async function getNotes() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes)
    }
    getNotes();
  }, [])

  const noteItem = notes.map((note, idx) => <NoteItem note={note} key={idx} />);
  console.log(noteItem)
  return (
    <>
      <h1>My Previously Created Notes</h1>

      {!noteItem ? noteItem: ' No Notes Yet!'}
      
    </>
  );
}