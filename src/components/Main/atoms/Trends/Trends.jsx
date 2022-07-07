import './Trends.scss'

function Trends({img, text, viewers}) {
  return (
    <div className='trends'>
      <img src={img} alt="" />
      <div className="text">
        <h5>{text}</h5>
        <p>{viewers} viewers</p>
      </div>
    </div>
  )
}

export default Trends