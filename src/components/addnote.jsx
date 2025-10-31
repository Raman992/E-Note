import React, { useState, useContext } from 'react'
import './CSS/addnote.css'
import NoteContext from '../context/notes/noteContext'

const Addnote = () => {

  const context = useContext(NoteContext);
  const {addNotes} = context;

  const [note, setNote] = useState({name:"", description:"", tag:"default"});

  const onClickEvent= (e) =>{
    e.preventDefault();
    addNotes(note.name, note.description, note.tag);
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
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descriptions</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
                </div>
                <button type="submit" className="btn" onClick={onClickEvent}>Add</button>
            </form>
            </div>
    </div>
  )
}

export default Addnote
