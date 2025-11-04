import React from 'react'

const Login = () => {
    const onClickEvent =()=>{

    }
  return (
    <div>
      <div className="container my-3">
            <h2>Login</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" name="Email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Descriptions</label>
                    <input type="password" className="form-control" id="password" name="password"/>
                </div>
                <button type="submit" className="btn" onClick={onClickEvent}>Add</button>
            </form>
            </div>
    </div>
  )
}

export default Login

