import "./Form.scss";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [faction, setFaction] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const image = {name, faction,text}
    console.log(image)
    fetch("http://localhost:8080/images" , {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(image)
    })
    
  };

  return (
    <div className="UserForm">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label >Faction</label>
        <select
          value={faction}
          onChange={(e) => setFaction(e.target.value)}
        >
            <option value="">Select an Option</option>
          <option value="Adepta Sororitas">Adepta Sororitas</option>
          <option value="Adeptus Astarties">Adeptus Astarties</option>
          <option value="Adeptus Mechanicus">Adeptus Mechanicus</option>
          <option value="Tau">Tau</option>
          <option value="Tyranids">Tyranids</option>
        </select>
        <label>Description</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
