import React from "react";
import { Link } from "react-router-dom";

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
      {/* {props.data.map((it) => (
        <div>
          <a href="it.url">
            <h6>{it.title}</h6>
            <p>{it.content}</p>
          </a>
        </div>
      ))} */}
    </div>
  );
};

export default HiringComponent;
