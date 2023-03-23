import { useState, useEffect, useRef } from 'react';
import * as notesAPI from "../../utilities/notes-api"
import NoteItem from '../../components/NoteItem/NoteItem';

export default function MyNotesPage({ notes, setNotes }) {

  

  const noteItem = notes.map((note, idx) => <NoteItem note={note} key={idx} />);
  // console.log(noteItem[0])
  return (
    <>
      <h1>My Previously Created Notes</h1>

      {noteItem === [] ? ' No Notes Yet!': noteItem}
      
    </>
  );
}