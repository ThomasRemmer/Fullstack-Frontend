import "./Form.scss";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Form = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [end, setA] = useState("")
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState("");
  const {value, setValue} = useContext(UserContext)

  const handleSubmit = (e) => {
    if(value == true) {
      e.preventDefault()
    const image = {name, date,text,photo,end}
    console.log(image)
    fetch("http://localhost:8080/images" , {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(image)
    })
    alert("Submitted results")
    } else {
      alert("you are not logged in")
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit } className="UserForm">
        <label className="UserForm--Item">Holiday Location</label>
        <input
        className="UserForm--Item UserForm--Item__Input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="UserForm--Item">Holiday Start Date</label>
        <input
          type="date"
          className="UserForm--Item UserForm--Item__Input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

<label className="UserForm--Item">Holiday End Date</label>
        <input
          type="date"
          className="UserForm--Item UserForm--Item__Input"
          value={end}
          onChange={(e) => setA(e.target.value)}
        />

  

        <label className="UserForm--Item" >Notes</label>
        <textarea
          rows="8"
         className="UserForm--Item UserForm--Item__Input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
 
        <label className="UserForm--Item">Image</label>
        <input
         className="UserForm--Item UserForm--Item__Input"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button className="UserForm--Item UserForm--Item__Input">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
