import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAlert } from "../context/AlertContext";


const Signup = () => {

  const { showAlert } = useAlert();
  const navigate = useNavigate();
  const onClickEvent = async (e) => {
    e.preventDefault();
    if (form.password !== form.cpassword) {
      showAlert("Passwords do not match!", "warning");
      return;
    }
    const response = await fetch("http://localhost:3000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: form.name, email: form.email, password: form.password })
    });
    const json = await response.json()
    console.log(json)
    if (json.authtoken) {
      console.log("Signup data:", form);
      showAlert("Signup successful! redirected to the login page", "success");
      navigate("/login");
    }
    else {
      showAlert("User exists", "error");
    }
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Sign up</h2>
        <form onSubmit={onClickEvent}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" >Name</label>
            <input type="name" className="form-control" id="name" name="name" onChange={onChange} value={form.name} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={form.email} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={form.password} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} value={form.cpassword} required/>
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
