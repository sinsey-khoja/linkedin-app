import "./Profile.scss";
import prImg from "../../../../assets/image/profile.png";
function Profile() {
  return (
    <div className="mainDiv">
      <div className="profile">
        <img className="img" src={prImg} alt="img profil" />
        <div className="pr-texts">
          <p className="name">
            D. Kargaev <span>YOU</span>
          </p>
          <p className="text">
            367 views today <span>+32</span>
          </p>
        </div>
      </div>
      <div className="chiziq"></div>
      <h3>OTHER</h3>
    </div>
  );
}

export default Profile;
