import Grup from "../../atoms/Grup/Grup";
import "./MyGrps.scss";
import moscow from "../../../../assets/image/moscow.png";
import digital from "../../../../assets/image/digital.png";
import interaction from "../../../../assets/image/interaction.png";
function MyGrps() {
  return (
    <div className="my-grps">
      <div className="text">
        <p className="title">my groups</p>
        <p className="edit">Edit list</p>
      </div>
      <div className="grups">
        <Grup img={moscow} text="Moscow State Linguistical University" />
        <Grup img={digital} text="Digital freelancers group" />
        <Grup img={interaction} text="Interaction design association" />
      </div>
      <p className="show_more">Show all (8)</p>
    </div>
  );
}
export default MyGrps;
