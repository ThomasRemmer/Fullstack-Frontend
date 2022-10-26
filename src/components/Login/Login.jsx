import { Link } from "react-router-dom";
import { useState, useContext } from 'react';
import "./Login.scss";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    

  const [users, setUsers] = useState([])
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false)
  const {value, setValue} = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/users"
    const res = await fetch(url)
    const data = await res.json()
    setUsers(data)
    for (let i = 0; i < users.length; i++) {
        if (users[i].name ===  name && users[i].password === password) {
            setSuccess(true)
            setValue(true)
        } else {
            alert("Invalid Login")
        }
        
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = { name, password };
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    });
  };

  return (
    <>
    {success ? (
        <Link to="/home" className="nav-menu__item">Login Successfull</Link>
    ) : (
        <section>
                  <form className="LoginForm">
        <label className="LoginForm--Item">Username: </label>
        <input
          type="text"
          className="LoginForm--Item LoginForm--Item__Input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="LoginForm--Item">Password: </label>
        <input
          type="text"
          className="LoginForm--Item LoginForm--Item__Input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="LoginForm--Item LoginForm--Item__Input"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="LoginForm--Item LoginForm--Item__Input"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <br></br>
      <Link to="/gallery" className="nav-menu__item">
        View as guest
      </Link>
        </section>
    )}


    </>
  );
};

export default Login;
