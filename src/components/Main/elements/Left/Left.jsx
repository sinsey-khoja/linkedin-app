import NewPost from "../../molecules/NewPost";
import Post2 from "../../molecules/Post2";
import Post3 from "../../molecules/Post3";
import Post4 from "../../molecules/Post4/Post4";
import Posts1 from "../../molecules/Posts1/Posts1";
import "./Left.scss";
function Left() {
  return (
    <div className="left">
      <NewPost />

      <h3>
        Sort by: <span>trending</span>
      </h3>

      <Posts1 />

      <Post2 />

      <Post3 />

      <Post4 />
    </div>
  );
}

export default Left;
