import { useState } from "react";

export default function NewNoteForm({ addNote }) {
    const [newNote, setNewNote] = useState({text: ''});
    
    function handleChange(evt) {
        setNewNote({...newNote, [evt.target.name]: evt.target.value})
    }
    
    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(newNote);
        setNewNote('');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add a New Note" onChange={handleChange} />
                <button type="submit">Add a New Note</button>
            </form>
        </>
    );
}