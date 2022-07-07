import PostProfile from "../../atoms/PostProfile";
import user4 from "../../../../assets/image/user4.png";
import PostInfo from "../../atoms/PostInfo/PostInfo";

import "./Post4.scss";

function Post4() {
  return (
    <div className="posts">
      <p className="posts-text">
        Audrey Alexander <span>comment this</span>
      </p>
      <div className="fullLine"></div>
      <div className="post-content">
        <PostProfile
          img={user4}
          name="Audrey Alexander"
          bio="Team lead at Google"
        />
        <p className="post4text">The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.</p>
        
      </div>
      <div className="fullLine"></div>
      <PostInfo likes={10} comments={0} />
    </div>
  );
}
export default Post4;