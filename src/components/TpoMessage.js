import React, { useEffect } from "react";
import Layout from "./Layout";

const Messaget = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="TPO Message CITK">
      <div>
        <h1 className="msgh">Faculty-In-Charge Message</h1>
        <p className="msgp">Dear Esteemed Recruiters,</p>
        <br />

        <p className="msgp">
          Welcome to CIT Kokrajhar, your premier destination for top-tier talent
          in engineering and technology. Located in the prestigious Bodoland
          Terrotorial (BTR) of India, we have established a solid reputation in
          both Assam and the North eastern region (NER). Our accomplished alumni
          are living proof of our tradition of excellence, excelling across
          diverse domains from engineering to research and development.
        </p>
        <br />
        <p className="msgp">
          Since 2006, CIT Kokrajhar has been dedicated to producing diploma
          holders graduates and post graduates who possess not only strong
          theoretical knowledge but also practical skills. Our students’
          unwavering commitment to innovation, problem solving, and adaptability
          sets them apart. As the training and placement officer, my team and I
          are committed to bridging the academia industry gap. We ensure our
          students are industry ready through rigorous training, workshops and
          internships, fostering holistic development.
        </p>
        <br />
        <p className="msgp">
          {" "}
          Our students excel not only academically but also in co-curricular and
          extracurricular activities, developing leadership teamwork and
          communication skills essential for a thriving career. Partnering with
          us connects you to some of the finest technical minds and contributes
          to shaping the future of engineering and technology landscape.
        </p>
        <br />
        <p className="msgp">
          Thank you for considering CIT Kokrajhar as your recruitment
          destination. We eagerly anticipate a mutually beneficial partnership,
          confident that our students will elevate your organization’s growth
          and success. For inquires or recruitment activities, please contact
          our Placement Cell.
        </p>
        <br />
        <p className="msgp">
          Welcome to CIT Kokrajhar, where talent meets opportunity!
        </p>
        <br />
        <p className="msgp">Warm Regards,</p>
        <br />
        <p className="cred">Dr. Agile Mathew</p>
        <p className="cred" style={{ marginBottom: "2vw" }}>
          Faculty-in-Charge(T&P Cell), CIT Kokrajhar
        </p>
      </div>
    </Layout>
  );
};

export default Messaget;
