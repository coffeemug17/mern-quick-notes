import NewNoteForm from "../../components/NewNoteForm/NewNoteForm";

export default function NewNotePage({ addNote, notes }) {
  return (
    <>
      <h1>Create a New Note</h1>
      <NewNoteForm addNote={addNote} notes={notes} />
    </>
  );
}