import React, { useState, useContext } from 'react'
import './CSS/addnote.css'
import NoteContext from '../context/notes/noteContext'

const Addnote = () => {

  const context = useContext(NoteContext);
  const {addNotes} = context;

  const [note, setNote] = useState({name:"", description:"", tag:""});

  const onClickEvent= (e) =>{
    e.preventDefault();
    addNotes(note.name, note.description, note.tag);
    setNote({ name: '', description: '', tag: '' });
  }

  const onChange= (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  
  
  return (
    <div>
      <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Note Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={note.name} onChange={onChange} minLength={3}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descriptions</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} minLength={6} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}/>
                </div>
                <button type="submit" className="btn" onClick={onClickEvent}>Add</button>
            </form>
            </div>
    </div>
  )
}

export default Addnote
