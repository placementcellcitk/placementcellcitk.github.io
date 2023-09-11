import React, { useEffect } from "react";
import gender from "../assets/images/SexRatio.png";
import student from "../assets/images/stfy.jpg";
import Strength from "../assets/images/Strength.png";
import Layout from "./Layout";

const Demographics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Demographics CITK">
      <div className="demo">
        <h1 className="demo-head">Demographics</h1>
        <h1 style={{ marginTop: "5%", color: "navy" }} className="subheads">
          Gender Ratio
        </h1>
        <div className="gender-ratio-outer">
          <div className="gender-ratio-inner">
            <div className="gender-ratio-row">
              <img src={gender} alt="" className="gender-ratio-row img" />
              <p>
                The institute aims to maintain a diverse culture in terms of
                gender ratio as well. The gender ratio in the college is
                observed as <strong>4 : 1.</strong>
              </p>
            </div>
            <h1 className="subheads">Student-Teacher Ratio</h1>
            <div className="gender-ratio-row">
              <img src={student} alt="" className="gender-ratio-row img" />
              <p>
                To provide quality education to its students, the institute
                maintains a student-teacher ratio as <strong>10 : 1</strong> so
                that every individual is paid adequate attention.
              </p>
            </div>
            <h1 className="subheads">Final & Pre Final Year Strength</h1>
            <div className="gender-ratio-row">
              <img src={Strength} alt="" className="gender-ratio-row img" />
              <p>
                CIT Kokrajhar admitted batch of B.Tech. with an intake of 350
                students for both final and pre-final year in 6 various branches
                of engineering (CSE, ECE, IE, CE, FET and MCD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demographics;
