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
    const response = await fetch(`${host}/api/notes/createnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      },
      body: JSON.stringify({name, description, tag})
    });
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": name,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  //Deletenote
  const deleteNotes = async (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      }
    });
    const json = await response.json()
    console.log(json);
  }

  //Updatenote
  const updateNotes = async (name, description, tag, id) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwNDkzZGVjMWIwNzJmYzlmOTE2MmUxIn0sImlhdCI6MTc2MTkwNzcxN30.BDpHmAjCeEfM_vUVjVplh9Dbreg3hNHZ3UXGkSwa38Y"
      },
      body: JSON.stringify({name, description, tag})
    });
    const json = await response.json()
    console.log(json)
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