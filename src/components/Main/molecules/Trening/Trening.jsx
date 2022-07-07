import Trends from "../../atoms/Trends/Trends";
import photo1 from "../../../../assets/image/Photo.png";
import photo2 from "../../../../assets/image/Photo-1.png";
import photo3 from "../../../../assets/image/Photo-2.png";
import "./Trening.scss";

function Trening() {
  return (
    <div className="trening">
      <h3>Trending articles</h3>

      <Trends img={photo1} text="How I make cool designs?" viewers="6,340" />
      <Trends img={photo2} text="Advices for young HR-manage" viewers="8,123" />
      <Trends img={photo3} text="How I make cool designs?" viewers="3,912" />
    </div>
  );
}

export default Trening;
