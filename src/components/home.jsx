import React from 'react'
import './home.css'
import Notes from './notes'

export const Home = () => {

    return (
        <div>
            <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Note Name</label>
                    <input type="text" className="form-control" id="name" name="name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descriptions</label>
                    <input type="text" className="form-control" id="description" name='description'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag'/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            </div>

            <Notes/>
        </div>
    )
}
export default Home
