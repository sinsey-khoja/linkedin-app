import "./RightProfile.scss";
import profileimg from "../../../../assets/image/profile.png";
import bgimg from "../../../../assets/image/profileBg.jpg";
function RightProfile() {
  return (
    <div className="right-content">
      <div className="right-profile">
        <div className="bg">
          <img src={bgimg} alt="" />
        </div>
        <div className="right-profile__info">
          <img src={profileimg} alt="" />

          <h3>Dmitry Kargaev</h3>
          <p>
            Freelance UX/UI designer, 80+ projects  in web design, mobile apps
            (iOS & android) and creative projects. Open to offers.
          </p>
        </div>
      </div>
      <div className="write">
        <h3>write new article</h3>
      </div>
    </div>
  );
}
export default RightProfile;
