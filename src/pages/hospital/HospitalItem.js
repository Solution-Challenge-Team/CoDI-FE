const HospitalItem = ({id, hospital, address, symptom, evaluation, img}) =>{
  return(
    <div className="hospitalItem">
      <p>id: {id}</p>
      <p>hospital: {hospital}</p>
      <p>address: {address}</p>
      <p>symptom: {symptom}</p>
      <p>evaluation: {evaluation}</p>
      <img src={img} alt="main"/>
    </div>
  )
}

export default HospitalItem;