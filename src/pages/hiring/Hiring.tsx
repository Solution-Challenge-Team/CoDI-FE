import Nav from "layout/nav/Nav";
import Footer from "layout/footer/Footer";
import HiringComponent from "components/hiringComponents/HiringComponent";

const Hiring: React.FC = () => {
  const hiringData = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Nav />
      {/* 채용 정보 */}
      <HiringComponent title="채용 정보" />
      {/* 일반채용 */}
      <HiringComponent title="일반 채용" />
      <Footer />
    </div>
  );
};

export default Hiring;
