import { useLocation } from 'react-router-dom';
import './hospitalDetail.css';
import ReviewEditor from './ReviewEditor.js';
import ReviewList from './ReviewList';

import heart_red from '../../assets/heart_red.png';
import heart_black from '../../assets/heart_black.png';

const dummyList =[
  {
    id: 1, 
    userName: "홍길동",
    evaluation: 3,
    symptom: "시각 장애",
    content: "리뷰 내용1"
  },
  {
    id: 2, 
    userName: "유재석",
    evaluation: 2,
    symptom: "청각 장애",
    content: "리뷰 내용2"
  },
  {
    id: 3, 
    userName: "강호동",
    evaluation: 4,
    symptom: "지체 장애",
    content: "리뷰 내용3"
  }
]

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
          <div className='detailImg'>
            <img src = {state.img} className='detailhospitalImg'></img>
          </div>
        </div>

        <div className='detailReview'>
           <ReviewEditor/>
           <ReviewList reviewList = {dummyList}/>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;