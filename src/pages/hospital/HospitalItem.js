import './hospital.css';
const HospitalItem = ({id, hospital, address, symptom, evaluation, img}) =>{
  return(
    <div className="hospitalItem">
      <img src={img} alt="hospitalmain" className='hospitalMainImg'/>
      <p className='hospitalName'>{hospital}</p>
    </div>
  )
}

export default HospitalItem;