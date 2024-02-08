import HospitalItem from './HospitalItem';
const HospitalList = ({hospitalList}) =>{
  return (
    <div className="hospitalList">
      {hospitalList.map((it)=>(
        <HospitalItem key = {it.id} {...it}/>
      ))}
    </div>
  )
}

HospitalList.defaultProps={
  hospitalList: []
}

export default HospitalList;