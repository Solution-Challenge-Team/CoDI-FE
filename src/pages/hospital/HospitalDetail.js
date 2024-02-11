import { useLocation } from 'react-router-dom';
import './hospitalDetail.css';

import heart_red from '../../assets/heart_red.png';
import heart_black from '../../assets/heart_black.png';

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
        <div className='detailinfo'>
          <span className='detailName'>{state.hospital}</span>
          <div className='detailLike'>
            <img src = {heart_black} className='likeImg'></img>
            <span className='likeNum'>0</span>
          </div>
        </div>

        <div className='detailinfoSub'>
          <div className='detailAddress'>
            {state.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;