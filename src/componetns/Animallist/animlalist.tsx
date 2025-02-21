import { useState } from "react";
import "./animallist.scss";

const AnimalList = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [animallist, setanimallist] = useState<string[]>([]);
  const [randomAnimal, setRandomAnimal] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  };

  const addAnimal = () => {
    if (inputvalue.trim() !== "") {
      setanimallist([...animallist, inputvalue]);
      setinputvalue(""); // Töm inputfältet efter att ha lagt till
    }
  };

  const pickRandomAnimal = () => {
    if (animallist.length > 0) {
      const randomIndex = Math.floor(Math.random() * animallist.length);
      setRandomAnimal(animallist[randomIndex]);
    }
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleInputChange} value={inputvalue} />
        <button onClick={addAnimal}>Add</button>
      </div>
      <div className="animalList">
        <h5 className="h5">My animal list!</h5>
        <ul>
          {animallist.map((a, index) => (
            <li key={index}>{a}</li>
          ))}
        </ul>
      </div>
      <button onClick={pickRandomAnimal}>🎲 Pick random</button>
      {randomAnimal && <p>Random animal: {randomAnimal} 🎉</p>}
    </>
  );
};

export default AnimalList;
