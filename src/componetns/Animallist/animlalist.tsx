import { useState } from "react";
import "./animallist.scss";
import Button from "../Button";

//["Lion", "Horse", "Dolfin"]//
//<string[]>//

function AnimalList() {
  const [inputvalue, setinputvalue] = useState("");
  const [animallist, setanimallist] = useState<string[]>([]);
  const [selectedAnimal, setanimal] = useState<string | null>(null);
  const HandelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  };
  const AddAnimal = () => {
    if (inputvalue === "") {
      alert("Type In Animal");
    } else {
      setanimallist([...animallist, inputvalue]);
      setinputvalue("");
    }
  };
  const deleteAnimal = () => {
    if (selectedAnimal) {
      setanimallist(animallist.filter((animal) => animal !== selectedAnimal));
    } else {
      alert("You need to select an animal to delete it");
    }
  };

  // const EditAnimal = () => {
  //   alert("edited");
  // }

  // <button onClick={EditAnimal}>Edit</button>*/

  return (
    <>
      <div>
        <input value={inputvalue} type="text" onChange={HandelInputChange} />

        <Button title="Add" handleClick={AddAnimal}></Button>
        <Button handleClick={deleteAnimal} title="Delete Animal"></Button>
        <p>you wrote: {inputvalue}</p>
      </div>
      <div className="animalList">
        <h5 className="h5">My animal list!</h5>
        <ul>
          {animallist.map((a, index) => (
            <li key={index}>
              <input
                type="radio"
                name="a"
                value={a}
                onChange={() => setanimal(a)}
                checked={selectedAnimal === a}
              />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AnimalList;
