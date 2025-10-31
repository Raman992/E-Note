import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';
import './CSS/noteItem.css'

const Noteitem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const {deleteNotes, updateNotes} = context;
    const onClickUpdate = () =>{
        updateNotes()
        
    }
    const onClickDelete = () =>{
        deleteNotes(note._id)
    }
    return (
        <div className="columns">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.name}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={onClickDelete}></i>
                        <i className="far fa-edit mx-2" onClick={onClickUpdate}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p><br/>Updated on: "{new Date(note.date).toLocaleTimeString()}"</p>                    
                </div>
            </div>
        </div>
    )
}

export default Noteitem