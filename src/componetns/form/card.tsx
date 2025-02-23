interface CardProps {
  name: string;
  email: string;
}

const Card = ({ name, email }: CardProps) => {
  return (
    <div className="card" style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
