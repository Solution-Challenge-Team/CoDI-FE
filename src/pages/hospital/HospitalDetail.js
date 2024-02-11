import { useLocation } from 'react-router-dom';
import './hospitalDetail.css';

const HospitalDetail = ({}) => {
  const { state } = useLocation();
  console.log(state)

  return (
    <div className='hospitalDetailPage'>
      <div className='detailClassification'>
        <div className="detailhospitalLocation">
          <span className="detaillocationSpan">위치</span>
          <span className='detaillocationEx'>위치 예시</span>
        </div>

        <div className="detailhospitalSymptom">
          <span className="detailsymptomSpan">증상</span>
          <span className="detailsymptomEx">증상 예시</span>
        </div>
      </div>

      <div className='detailhospitalInfo'>
        <div className='detailinfoName'>
          <span className='detailName'>{state.hospital}</span>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;