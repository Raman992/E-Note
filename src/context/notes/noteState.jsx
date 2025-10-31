import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const host = "http://localhost:3000"
  
  //Fetchnote
  const fetchNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  //Addnote
  const addNotes = async (name, description, tag) => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      },
      body: JSON.stringify({name, description, tag})
    });
    const json = await response.json()
    setNotes(notes.concat(json));
  }

  //Deletenote
  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Updatenote
  const updateNotes = async (name, description, tag, id) => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      },
      body: JSON.stringify({name, description, tag})
    });
    const json = await response.json()

    for (let i = 1; i <= notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.name = name;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNotes, deleteNotes, updateNotes, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState