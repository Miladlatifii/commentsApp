import { useEffect, useState } from "react";
import "./fullComment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/gerAllCommentsService";
import { getOneComment } from "../../services/getOneCommentService";

const FullComment = ({ match, history }) => {
  const commentId = match.params.id;
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const delteHandler = async () => {
    try {
      await deleteComment(commentId);
      history.push("/");
      setComment(null);
    } catch (error) {}
  };

  let commentDetail = <p>please select a comment !</p>;
  if (commentId) commentDetail = <p>Loading...</p>;
  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={delteHandler}>delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
