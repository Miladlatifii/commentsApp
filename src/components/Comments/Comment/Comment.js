import "./comment.css";

const Commnet = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </div>
  );
};

export default Commnet;
