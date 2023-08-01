import { useState } from "react";
import "./newComment.css";
import { addNewComment } from "../../services/addNewCommentService";


const NewComment = ({ history }) => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComment({ ...comment, postId: 10 });
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="formControl">
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div className="formControl">
        <label>eamil</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div className="formControl">
        <label>content</label>
        <textarea type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={() => postCommentHandler(comment)}>
        add new comment
      </button>
    </div>
  );
};

export default NewComment;
