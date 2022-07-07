import { CommentIcon, LikeIcon, Share2Icon } from "../../../../assets/svg";
import "./PostInfo.scss";

function PostInfo({ likes = 0, comments = 0 }) {
  return (
    <div className="post-info">
      <div className="div">
        <p>
          <LikeIcon /> {likes}
        </p>
        <div className="line"></div>
        <p>
          <CommentIcon /> {comments}
        </p>
        <div className="line"></div>
      </div>
      <div className="line"></div>
      <h4> <Share2Icon/> SHARE</h4>
    </div>
  );
}

export default PostInfo;
