import React from 'react'

const Signup = () => {
    const onClickEvent =()=>{

    }
  return (
    <div>
      <div className="container my-3">
            <h2>Sign up</h2>
            <form > 
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" name="Email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword"/>
                </div>
                <button type="submit" className="btn" onClick={onClickEvent}>Add</button>
            </form>
            </div>
    </div>
  )
}

export default Signup
