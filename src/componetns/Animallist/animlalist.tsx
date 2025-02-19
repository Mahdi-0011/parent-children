import { useState } from "react";

//["Lion", "Horse", "Dolfin"]//
//<string[]>//

const AnimalList = () => {

  const[inputvalue, setinputvalue] = useState("");

  const HandelInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  }
  const AddAnimal = () => {
    alert("added");
  }
  const DeletAnimal = () => {
    alert("deleted");
  }
  const EditAnimal = () => {
    alert("edited");
  }

  return <>
  <div>
  <input type="text" onChange={HandelInputChange} value={inputvalue}/>
  <button onClick={AddAnimal} >Add</button>
  <p>you wrote: {inputvalue}</p>
  <button onClick={DeletAnimal}>Delete</button>
  <button onClick={EditAnimal}>Edit</button>
  </div>
  </>
};

export default AnimalList;