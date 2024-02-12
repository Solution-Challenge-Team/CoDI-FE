import './review.css';
const ReviewEditor = () =>{
  return (
    <div className="reviewEditor">
      <div className='editorTitle'>
        <span className='editorTitleSpan'>[병원 리뷰 쓰기]</span>
      </div>
      <div className="reviewInput">
        <textarea className="reviewTextarea"/>
        <div className='reviewSymptom'>
          <select className="reviewsymptomSelect">
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
}

export default ReviewEditor;