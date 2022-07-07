import Heshtags from '../../atoms/Heshtags/Heshtags'
import './Followed.scss'

function Followed(){
  return(
    <div className="followed">
      <h3>Followed hashtags</h3>

      <div className="heshtags-box">
        <Heshtags text="#work"/>
        <Heshtags text="#business"/>
        <Heshtags text="#hr"/>
        <Heshtags text="#userinterface"/>
        <Heshtags text="#digital"/>
        <Heshtags text="#userexperience"/>
        <Heshtags text="#ux"/>
        <Heshtags text="#ui"/>
        <Heshtags text="#freelance"/>
      </div>
    </div>
  )
}
export default Followed