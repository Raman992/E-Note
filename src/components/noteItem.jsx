import React, { useContext,useState } from 'react'
import NoteContext from '../context/notes/noteContext';
import './CSS/noteItem.css'
import EditModal from './editmodal';

const Noteitem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const {deleteNotes} = context;

    const [showModal, setShowModal] = useState(false);

    const onClickUpdate = () => setShowModal(true);

    const onClickDelete = () => deleteNotes(note._id);

    return (
        <div className="columns">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.name}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={onClickDelete}> Delete</i>
                        <i className="far fa-edit mx-2" onClick={onClickUpdate}> Edit</i>
                        <i className="fas fa-tag mx-2"> {note.tag}</i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p><br/>Updated on: "{new Date(note.date).toLocaleTimeString()}"</p>                    
                </div>
            </div>
            <EditModal
                show={showModal}
                onClose={() => setShowModal(false)}
                note={note}
            />
        </div>
    )
}

export default Noteitem