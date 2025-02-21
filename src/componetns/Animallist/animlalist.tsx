import { useState } from "react";
import "./animallist.scss";
import Button from "../Button";

//["Lion", "Horse", "Dolfin"]//
//<string[]>//


const AnimalList = () => {

  const[inputvalue, setinputvalue] = useState("");
  const[animallist, setanimallist] = useState<string[]>([]);

  const HandelInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  };
  const AddAnimal = () => {
    setanimallist([...animallist, inputvalue]);
   }
  /*const DeletAnimal = () => {
    alert("deleted");
  }
  const EditAnimal = () => {
    alert("edited");
  }
    <button onClick={DeletAnimal}>Delete</button>
    <button onClick={EditAnimal}>Edit</button>*/
  
  return <>
  <div>
  <input type="text" onChange={HandelInputChange} value={inputvalue}/>
  <button onClick={AddAnimal} >Add</button>
  <p>you wrote: {inputvalue}</p>
  </div>
  <div className="animalList">
    <h5 className="h5">My animal list!</h5>
    <ul>
        {animallist.map((a) => (<li key={a}>{a}</li>))}
    </ul>
  </div>
  </>
};

export default AnimalList;