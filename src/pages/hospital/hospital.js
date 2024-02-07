import './hospital.css';
const Hospital = () => {
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
    </div>
  )
};

export default Hospital;