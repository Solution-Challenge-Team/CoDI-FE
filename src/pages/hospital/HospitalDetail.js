import { useParams } from 'react-router-dom';

const HospitalDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Hospital Detail Page</h2>
      <p>Hospital ID: {id}</p>
    </div>
  );
};

export default HospitalDetail;