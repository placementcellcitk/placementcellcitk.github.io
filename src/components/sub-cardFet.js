import React from "react";
import { subjects7 } from "./semListFet";

const SubCard7 = (props) => {
  return (
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div className="card__content">
            <div className="card__title">
              <p className="sem">{props.sem}</p>
            </div>
            <ul className="sub">
              {subjects7[props.ind].map((val, index) => (
                <li key={val + index}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SubCard7;
