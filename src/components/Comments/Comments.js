import { useEffect, useState } from "react";
import Commnet from "./Comment/Comment";
import "./comments.css";
import { getAllComments } from "../../services/gerAllCommentsService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComments = () => {
    let renderValue = <p>Loading ...</p>;
    if (error) {
      renderValue = <p>fetching data failed!</p>;
      toast.error("this is an error!");
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Commnet name={c.name} email={c.email} />
        </Link>
      ));
    }
    return renderValue;
  };

  return <section>{renderComments()}</section>;
};

export default CommentsList;
