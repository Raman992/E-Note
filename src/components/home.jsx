import React from 'react'
import Notes from './notes'
import Addnote from './addnote'

import Alert from "./alert"
export const Home = () => {

    return (
        <div>
            <Alert/>
            <Addnote/>
            <Notes/>
        </div>
    )
}
export default Home
