import { useState } from "react";
import './animallist.scss'

//["Lion", "Horse", "Dolfin"]//
//<string[]>//


/*const AnimalList = () => {

  const[inputvalue, setinputvalue] = useState("");
  const[animallist, setanimallist] = useState<string[]>([]);

  const HandelInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  }
  const AddAnimal = () => {
    setanimallist([...animallist, inputvalue]);
   }
  /*const DeletAnimal = () => {
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
  </div>
  <div className="animalList">
    <h5 className="h5">My animal list!</h5>
    <ul>
        {animallist.map((a) => (<li key={a}>{a}</li>))}
    </ul>
  </div>
  </>
};

export default AnimalList;*/


const animalList = () => {
  const [animalArray, setAnimlaArray] = useState<string[]>(["gorilla", "lion", "hamster"])

  return<>
  <h1>Animal List</h1>
  <input type="text" />
  <button>Add animal</button>
  </>
}

export default animalList;