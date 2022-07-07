import "./Posts1.scss";
import PostProfile from "../../atoms/PostProfile";
import user1 from "../../../../assets/image/user1.png";
import PostInfo from "../../atoms/PostInfo/PostInfo";
function Posts() {
  return (
    <div className="posts">
      <p className="posts-text">
        Ted Bell, Annette Nguyen <span>and</span> Cody Hawkins
        <span>liked this</span>
      </p>
      <div className="fullLine"></div>
      <div className="post-content">
        <PostProfile img={user1} name="Theresa Steward" bio="iOS developer" />
        <p>
          What did the Dursleys care if Harry lost his place on the House
          Quidditch team because he hadn’t practiced all summer? What was it to
          the Dursleys if Harry went back to school without any of his homework
          done? The Dursleys were what wizards called Muggles not a drop of
          magical blood in their veins.
        </p>
        <h4>Read more</h4>
      </div>
      <div className="fullLine"></div>
      <PostInfo likes={42} comments={9}/>
    </div>
  );
}

export default Posts;
