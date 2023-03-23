import { useState } from "react";

export default function NewNoteForm({ addNote, notes }) {
    const [newNote, setNewNote] = useState({text: ''});
    
    function handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value})
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote({text: ''});
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="text" type="text" placeholder="Add a New Note" onChange={handleChange} value={newNote.text} />
                <button type="submit">Add a New Note</button>
            </form>
        </>
    );
}