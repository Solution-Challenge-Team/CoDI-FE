import React from "react";
import { Link } from "react-router-dom";
import ListBar from "components/listBar/ListBar";

// props 타입지정
interface HiringComponentProps {
  title: string;
}

const HiringComponent: React.FC<HiringComponentProps> = (props) => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <div>
          <Link to={"#"}>
            <span>더보기...</span>
          </Link>
        </div>
      </div>
      <ListBar />
    </div>
  );
};

export default HiringComponent;
