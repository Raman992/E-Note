import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  const host = "http://localhost:3000"

  const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMWRjMDNkNTZkYmU5NTBiZWZjZjBkIn0sImlhdCI6MTc2MTcyOTU2N30.2bNXrXHyfqhvaY_I3elSMHMhiWBtCFGPYBetjAyyoiA"
});

  
  //Fetchnote
  const fetchNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: getAuthHeaders()
    });
    const json = await response.json()
    setNotes(json)
  }

  //Addnote
  const addNotes = async (name, description, tag) => {
  const response = await fetch(`${host}/api/notes/createnotes`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({ name, description, tag })
  });
  if (!response.ok) {
    const err = await response.json();
    alert(err.error || "Failed to add note");
    return;
  }
  const newNote = await response.json();
  setNotes(notes.concat(newNote));
};

  //Deletenote
  const deleteNotes = async (id) => {
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const json = await response.json()
    console.log(json);
  }

  //Updatenote
  const updateNotes = async (name, description, tag, id) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({name, description, tag})
    });
    const json = await response.json()
    console.log(json)
    let updated = JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < updated.length; i++) {
        if (updated[i]._id === id) {
            updated[i].name = name;
            updated[i].description = description;
            updated[i].tag = tag;
            updated[i].date = new Date();
            break;
        }
      setNotes(updated)
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNotes, deleteNotes, updateNotes, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState