import './hospital.css';
import HospitalList from './HospitalList';
import hospitalMain from '../../assets/hospital_main.png'

const Hospital = () => {
  const dummyList = [
    {
      id: 1,
      hospital: "분당서울대병원",
      address: "경기도 성남시 분당구 구미로173번길 82",
      symptom: "지체 장애",
      evaluation: 4.5,
      img: hospitalMain
    },
    {
      id: 2,
      hospital: "아주대학교병원",
      address: "경기도 수원시 영통구 월드컵로 164(원천동 산5)",
      symptom: "시각 장애",
      evaluation: 4.0,
      img: hospitalMain
    },
    {
      id: 3,
      hospital: "가천대 길병원",
      address: "인천광역시 남동구 구월동 남동대로774번길 21",
      symptom: "정신 장애",
      evaluation: 2.5,
      img: hospitalMain
    }
  ]

  return (
    <div className="hospitalPage">
      <div className='classification'>
        <div className="hospitalLocation">
          <span className="locationSpan">위치</span>
          <select className="locationSelect">
            <option value="whole">전체</option>
            <option value="seoul">서울</option>
            <option value="seoul">경기도</option>
            <option value="seoul">강원도</option>
            <option value="seoul">충청북도</option>
            <option value="seoul">충청남도</option>
            <option value="seoul">전라북도</option>
            <option value="seoul">전라남도</option>
            <option value="seoul">경상북도</option>
            <option value="seoul">경상남도</option>
            <option value="seoul">제주도</option>
          </select>
        </div>

        <div className="hospitalSymptom">
          <span className="symptomSpan">증상</span>
          <select className="symptomSelect">
            <option value="total">전체</option>
            <option value="visual">시각장애</option>
            <option value="hearing">청각장애</option>
            <option value="physical">지체장애</option>
            <option value="speech">언어장애</option>
            <option value="developmental">발달장애</option>
            <option value="mental">정신장애</option>
            <option value="etc">기타</option>
          </select>
        </div>
      </div>

      <div className='hospitalList'>
        <HospitalList hospitalList = {dummyList}/>
      </div>
    </div>
  )
};

export default Hospital;