import PostProfile from "../../atoms/PostProfile";
import user2 from "../../../../assets/image/user2.png";
import postUser2 from "../../../../assets/image/postUser2.png";
import "./Post2.scss";
import PostInfo from "../../atoms/PostInfo/PostInfo";

function Post2() {
  return (
    <div className="posts">
      <p className="posts-text">
        Audrey Alexander <span>comment this</span>
      </p>
      <div className="fullLine"></div>
      <div className="post-content">
        <PostProfile
          img={user2}
          name="Kyle Fisher"
          bio="Product designer at Commandor Corp."
        />
        <h5>How’s your day going, guys?</h5>
        <img src={postUser2} alt="" />
      </div>
      <div className="fullLine"></div>
      <PostInfo likes={12} comments={3} />
    </div>
  );
}

export default Post2;
