import PostProfile from "../../atoms/PostProfile";
import user3 from "../../../../assets/image/user3.png";
import PostInfo from "../../atoms/PostInfo/PostInfo";

import "./Post3.scss";
import DownloadBox from "../../atoms/DownloadBox/DownloadBox";

function Post3() {
  return (
    <div className="posts">
      <p className="posts-text">
        Audrey Alexander <span>comment this</span>
      </p>
      <div className="fullLine"></div>
      <div className="post-content">
        <PostProfile
          img={user3}
          name="Brandon Wilson"
          bio="Senior UX designer"
        />
        <h5>There is some new guidelines for iOS</h5>
        <DownloadBox name="iOS 11 guidelines for UX/UI designers"
        size="PDF file, 324 kb"/>
        <DownloadBox name="iOS 11 guidelines for developers"
        size="PDF file, 245 kb"/>
      </div>
      <div className="fullLine"></div>
      <PostInfo likes={89} comments={7} />
    </div>
  );
}
export default Post3;
