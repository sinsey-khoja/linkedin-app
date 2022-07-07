import { DownloadIcon, FileIcon } from "../../../../assets/svg";
import "./DownloadBox.scss";
function DownloadBox({ name, size }) {
  return (
    <div className="download-box">
      <div className="download-file">
        <FileIcon />
        <div className="texts">
          <p className="name">{name}</p>
          <p className="text">{size}</p>
        </div>
      </div>
      <DownloadIcon />
    </div>
  );
}

export default DownloadBox;
