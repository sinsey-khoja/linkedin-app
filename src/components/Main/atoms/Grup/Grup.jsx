import './Grup.scss'

function Grup({img, text}) {
  return(
    <div className='grup'>
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default Grup