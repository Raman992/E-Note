import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './noteItem';
import './CSS/notes.css'

const Notes = () => {
    const context = useContext(noteContext);

    const { notes, fetchNotes } = context;
    useEffect(() => {
        fetchNotes();
    }, [])
    return (
        <div className='row'>
            <h2 className='mx-2' >Your Notes</h2>
            {notes.map((note, index) => (
                <Noteitem key={note._id || index} note={note} />
            ))}
        </div>
    )
}

export default Notes