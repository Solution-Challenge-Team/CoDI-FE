import {useNavigate} from 'react-router-dom';
import './hospital.css';
const HospitalItem = ({id, hospital, address, symptom, evaluation, img}) =>{
  const navigate = useNavigate();
  const gotoDetail = () =>{
    const state = {
      id: id,
      hospital: hospital,
      address: address,
      symptom: symptom,
      evaluation: evaluation,
      img: img
    }
    navigate(`/hospital/${id}`, {state})
  }
  return(
    <div className='hospitalItem' onClick={gotoDetail}>
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