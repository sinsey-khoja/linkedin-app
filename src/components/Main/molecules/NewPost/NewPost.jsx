import "./NewPost.scss";
import {
  ImageIcon,
  LentaIcon,
  ShareIcon,
  SkripkaIcon,
} from "../../../../assets/svg";
function NewPost() {
  return (
    <div className="new-post">
      <h2 className="title">New Post</h2>
      <div className="line"></div>
      <div className="content">
        <input type="search" placeholder="What’s on your mind?" />
        <div className="icons">
          <SkripkaIcon />
          <ImageIcon />
          <LentaIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}
export default NewPost;
