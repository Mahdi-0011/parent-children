import { useState } from "react";
import Card from "./card"; 
import './form.scss'

const FormUsers = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [submittedUsers, setSubmittedUsers] = useState<{ name: string; email: string }[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // lägga till ny kort
    setSubmittedUsers([...submittedUsers, user]);
    setUser({ name: "", email: "" }); 
  };

  return (
    <>
      <h1>Users Form!</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Name: <input 
          type="text" 
          name="name" 
          value={user.name} 
          onChange={handleChange} 
          />
        </p>
        <p>
          Email: <input 
          type="text" 
          name="email" 
          value={user.email} 
          onChange={handleChange} 
          />
        </p>
        <button 
        type="submit">
          Submit
          </button>
      </form>
      <hr />

      {/* visa alla kort*/}
      <div>
        {submittedUsers.map((submittedUser, index) => (
          <Card 
          key={index} 
          name={submittedUser.name} 
          email={submittedUser.email} 
          />
        ))}
      </div>
    </>
  );
};

export default FormUsers;
