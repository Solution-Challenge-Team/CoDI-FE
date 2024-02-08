import './hospital.css';
const HospitalItem = ({id, hospital, address, symptom, evaluation, img}) =>{
  return(
    <div className="hospitalItem">
      <div className='hospitalSection'>
        <div className='hospitalInfo'>
          <img src={img} alt="hospitalmain" className='hospitalMainImg'/>
          <p className='hospitalEvalution'>{evaluation}점</p>
        </div>
        <p className='hospitalName'>{hospital}</p>
        <p className='hospitalAddress'>{address}</p>
      </div>
    </div>
  )
}

export default HospitalItem;