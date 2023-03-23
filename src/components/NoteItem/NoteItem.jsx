export default function NoteItem({ note, idx }) {
    return (
        <>
            <li>
                {note.text}
                &nbsp;|&nbsp;
                {new Date(note.createdAt).toLocaleString()}
            </li>
        </>
    );
}