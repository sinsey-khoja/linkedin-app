import Followed from "../../molecules/Followed";
import MyGrps from "../../molecules/MyGrps/MyGrps";
import RightProfile from "../../molecules/RightProfile";
import Trening from "../../molecules/Trening/Trening";
import "./Right.scss";

function Right() {
  return (
    <div className="right">
      <RightProfile />
      <MyGrps />
      <Followed />
      <Trening />
    </div>
  );
}

export default Right;
