import { useEffect } from "react";
import React from "react";
import railway from "../assets/images/railways.jpg";
import airport from "../assets/images/airways.jpg";
import roadways from "../assets/images/roadways.jpg";
import Layout from "./Layout";

const BoxComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="How to Reach CITK">
      <div className="box-container">
        <div className="box">
          <div className="box-image">
            <img src={railway} alt=" " />
          </div>
          <div className="box-content">
            <h1>
              <strong>Railways</strong>
            </h1>
            <p>
              The nearest railway station to CIT Kokrajhar is the Kokrajhar
              Railway Station. It is situated just 10 kilometers away from the
              institute premises. The station serves as a vital gateway for
              students, faculty, and visitors alike.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={airport} alt=" " />
          </div>
          <div className="box-content">
            <h1>
              <strong>Airways</strong>
            </h1>
            <p>
              Reaching CIT Kokrajhar by air offers a swift and comfortable way
              to access this esteemed institution nestled in the heart of Assam,
              India.
            </p>
            <ul className="custom-list">
              <li>
                Rupsi Airport is the nearest airport to CIT Kokrajhar, located
                at a distance of approximately 75 kilometers from the campus.
                With its proximity to the institution, Rupsi Airport offers a
                convenient and efficient way to access the campus. Travelers can
                take advantage of the airport's facilities and services to reach
                their destination comfortably.
              </li>
              <li>
                Another viable option for reaching CIT Kokrajhar by air is
                through Guwahati Airport (GAU). Upon arrival at Guwahati
                Airport, travelers can continue their journey to CIT Kokrajhar
                through various transportation modes, such as buses, trains, or
                private vehicles.
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={roadways} alt=" " />
          </div>
          <div className="box-content">
            <h1>
              <strong>Roadways</strong>
            </h1>
            <p>
              The nearest major highway to CIT Kokrajhar is NH27 (National
              Highway 27). This well-connected highway plays a crucial role in
              connecting various regions and provides a convenient route to
              reach CIT Kokrajhar.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BoxComponent;
