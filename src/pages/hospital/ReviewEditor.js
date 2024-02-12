import './review.css';
const ReviewEditor = () =>{
  return (
    <div className="reviewEditor">
      <div className='editorTitle'>
        <span className='editorTitleSpan'>[병원 리뷰 쓰기]</span>
      </div>
      <div className="reviewInput">
        <textarea className="reviewTextarea"/>

      </div>
    </div>
  )
}

export default ReviewEditor;