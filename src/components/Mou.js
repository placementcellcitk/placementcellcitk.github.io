import React, { useEffect } from "react";

import astug from "../assets/mou/astug.jpg";
import boldtek from "../assets/mou/boldtek.jpg";
import digitaloma from "../assets/mou/digitaloma.jpg";
import ictm from "../assets/mou/ictm.jpg";
import iitg from "../assets/mou/iitg.jpg";
import iocl from "../assets/mou/iocl.jpg";
import mobisus from "../assets/mou/mobisus.jpeg";
import nfr from "../assets/mou/nfr.jpeg";
import raffles from "../assets/mou/raffles.jpg";
import stpi from "../assets/mou/stpi.jpg";
import swedium from "../assets/mou/swedium.jpg";
import utpmalaysia from "../assets/mou/utpmalaysia.jpg";
import Layout from "./Layout";

const Mousigned = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="MOU's Signed CITK">
      <React.Fragment>
        <figure className="snip1560">
          <figcaption>
            <p className="mou-detail">{props.company}</p>
          </figcaption>
          <div className="profile-image">
            <img src={props.img} alt={props.alt} />
          </div>
          <figcaption>
            <h3>{props.name}</h3>
            <p style={{ margin: "5 10px" }}>"{props.message}"</p>
          </figcaption>
        </figure>
      </React.Fragment>
    </Layout>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="mou-team">
          <h1 className="mou-heading">Memorandum of Understanding (MoU)</h1>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                company="INDUSTRIES"
                img={stpi}
                alt="STPI Guwahati"
                name="STPI Guwahati"
                message="MoU for Industry-Academic Collaboration"
              />
              <Mousigned
                img={swedium}
                alt="Swedium Global Services Pvt. Ltd. Bangalore"
                name="Swedium Global Services Pvt. Ltd. Bangalore"
                message="MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
            </div>
          </div>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                img={boldtek}
                alt="BoldTek Pvt. Ltd. Guwahati"
                name="BoldTek Pvt. Ltd. Guwahati"
                message="MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
              <Mousigned
                img={digitaloma}
                alt="Digitaloma Pvt. Ltd. Kokrajhar"
                name="Digitaloma Pvt. Ltd. Kokrajhar"
                message=" MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
            </div>
          </div>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                img={mobisus}
                alt="Mobius Foundation, New Delhi"
                name="Mobius Foundation, New Delhi"
                message="MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
              <Mousigned
                img={nfr}
                alt="Northeast Frontier Railway (NFR)"
                name="Northeast Frontier Railway (NFR)"
                message=" MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
            </div>
          </div>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                img={iocl}
                alt="IOCL Bongaigaon & NTPC Salakati"
                name="IOCL Bongaigaon & NTPC Salakati"
                message="MoU for Industry-Academic Collaboration"
                company="INDUSTRIES"
              />
              <Mousigned
                img={utpmalaysia}
                alt="UTP Malaysia"
                name="UTP Malaysia"
                message=" Mou for Foreign Academic Collaboration"
                company="FOREIGN UNIVERSITY"
              />
            </div>
          </div>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                img={iitg}
                alt="IIT Guwahati"
                name="IIT Guwahati"
                message="Mou for Academic Collaboration"
                company="INDIAN INSTITUTES"
              />
              <Mousigned
                img={ictm}
                alt="ICT Mumbai"
                name="ICT Mumbai"
                message=" Mou for Academic Collaboration"
                company="INDIAN INSTITUTES"
              />
            </div>
          </div>

          <div className="mou-coordinators">
            <div className="mou-coordinators-wrapper">
              <Mousigned
                img={astug}
                alt="ASTU Guwahati"
                name="ASTU Guwahati"
                message="Mou for Academic Collaboration"
                company="INDIAN INSTITUTES"
              />
              <Mousigned
                img={raffles}
                alt="RAFFLES UNIVERSITY"
                name="RAFFLES UNIVERSITY"
                message=" Mou for Academic Collaboration"
                company="INDIAN INSTITUTES"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
