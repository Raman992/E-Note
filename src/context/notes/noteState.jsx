import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61322f195153781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "name": "Note name",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut, quidem quisquam rem qui iure tempore, repellendus impedit dolorem beatae nulla. Qui aperiam explicabo doloremque numquam ipsam. Alias, voluptatibus ullam.",
          "tag": "general",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f1a95153781a8ca8d0e02",
          "user": "6131dc5e3e4037cd4734a066",
          "name": "NewNote",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut, quidem quisquam rem qui iure tempore, repellendus impedit dolorem beatae nulla. Qui aperiam explicabo doloremque numquam ipsam. Alias, voluptatibus ullam.",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f19515378a1a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "name": "Note name",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut, quidem quisquam rem qui iure tempore, repellendus impedit dolorem beatae nulla. Qui aperiam explicabo doloremque numquam ipsam. Alias, voluptatibus ullam.",
          "tag": "general",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f195153a781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "name": "Note name",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut, quidem quisquam rem qui iure tempore, repellendus impedit dolorem beatae nulla. Qui aperiam explicabo doloremque numquam ipsam. Alias, voluptatibus ullam.",
          "tag": "general",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notesInitial)
    
      //Addnote
      const addNotes = (name, description, tag)=>{
        console.log("Adding a new note")
        const note = null;
        setNotes(notes.concat(note));
      }

      //Deletenote
      const deleteNotes=(id)=>{
        const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
      }

      //Updatenote
      const updateNotes=(name, description, tag, id)=>{


        for(let i=1; i <= notes.length; i++){
          const element = notes[i];
           if(element._id===id){
            element.name=name;
            element.description=description;
            element.tag=tag;
           }
        }
      }

    return (
        <NoteContext.Provider value={{notes, setNotes, addNotes, deleteNotes, updateNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState