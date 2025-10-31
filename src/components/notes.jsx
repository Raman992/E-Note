import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './noteItem';
import './CSS/notes.css'

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, addNotes} = context;
    return (
        <div className='row'>
            <h2 className='mx-2' >Your Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
    )
}

export default Notes