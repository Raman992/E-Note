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
          "_id": "61322f195153781a8ca8d0e02",
          "user": "6131dc5e3e4037cd4734a066",
          "name": "NewNote",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut, quidem quisquam rem qui iure tempore, repellendus impedit dolorem beatae nulla. Qui aperiam explicabo doloremque numquam ipsam. Alias, voluptatibus ullam.",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;