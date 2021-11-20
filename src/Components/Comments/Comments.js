import "../global.css";
const Comments = (props) => {
  return (
    <div className="MainCommentBody">
      <div className="CommentBodyUpperBox">
        <img
          className="CommentPageImage"
          alt={props.authorImage}
          src={props.authorImage}
        />
        <div className="CommentPageImageText">{props.authorName}</div>
      </div>
      <div className="CommentBodyBottomBox">{props.authorDescription}</div>
    </div>
  );
};
export default Comments;
