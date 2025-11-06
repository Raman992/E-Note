import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { useAlert } from "../context/AlertContext";

const Login = () => {

  const { showAlert } = useAlert();
  const [form, setForm] = useState({
    email: "", password: ""
  });

  let navigate = useNavigate ();

  const onChange = (e) =>{
        setForm({
      ...form, [e.target.name]: e.target.value
    })
  }
  const onClickEvent = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: form.email, password: form.password})
        });
        const json = await response.json()
        console.log(json)
        if (json.authtoken){
            localStorage.setItem('token', json.authtoken); 
            showAlert("Logged in successfully","success")
            navigate("/");
        }
        else{
            showAlert("Invalid credentials","error")
        }
    }

  return (
    <div>
      <div className="container my-3">
        <h1>Login to use the E-Note to save your personal notes</h1>
        <br />
        <h2>Login</h2>
        <form className="my-3" onSubmit={onClickEvent}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={onChange}/>
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

