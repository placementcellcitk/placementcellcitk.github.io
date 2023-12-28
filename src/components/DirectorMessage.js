import React, { useEffect } from "react";
import Layout from "./Layout";

const MessageD = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Director Message CITK">
      <div>
        <h1 className="msgh">Director's Message</h1>
        <p className="msgp">
        Dear Recruiters,
The Training and Placement Cell of the Central Institute of Technology Kokrajhar serves as a bridge
between academia and industry, facilitating a seamless transition for our students into the professional
realm. We understand the pivotal role that recruiters play in identifying and harnessing talent, and we
are eager to forge lasting partnerships that benefit both our students and your organization.
CIT Kokrajhar is a center of skills, innovation, and human resource development, focusing especially on
fulfilling the needs of vocational and technical education in the Bodoland Territorial Region. I am glad to
inform you that the majority of students at this institute are from BTR and NE India with a good number
of students from other states of India too. CIT is mandated to impart technical and vocational education,
such as Information Technology, Construction Technology, Food Processing Technology, Electronics and
Communication Engineering, Instrumentation Engineering, Multimedia Communication and Design, etc.{" "}
        </p>
        <br />
        <p className="msgp">
        CIT started its first batch of students with a Diploma module in 2006 and has now grown into a Deemed
to be University offering BTech/BDes/MTech/MDes/PhD programs in various departments. I would like
to remind you all that it is next to impossible to live and cope up with the present-day world without
technical knowledge. So, to help society and the country, we still need many young technical graduates
and researchers. While we have IITs, NITs, IISc, and other institutes of national importance in the
country, institutes like CIT Kokrajhar fulfill the aspirations and needs of many underprivileged students
and students from remote places. Since assuming my additional charge as the Director of CIT Kokrajhar, I
have come to know that many of our alumni are pursuing MTech and PhD in IISc/IITs and abroad, and
that many are placed in various prestigious positions in the industry. These achievements are the pride
of CIT Kokrajhar, and we can learn a lot from these accomplishments of the alumni.
        </p>
        <br />
        <p className="msgp">
          {" "}
          I encourage you to explore the detailed profiles of our students, the academic programs we offer, and
the various success stories that highlight the caliber of talent that emerges from CIT Kokrajhar. We look
forward to the opportunity to welcome your organization to our campus, providing a platform for
meaningful interactions between your representatives and our aspiring young professionals.
        </p>
        <br />
        <br />
        <p className="cred">Prof. A. Srinivasan</p>
        <p className="cred" style={{ marginBottom: "2vw" }}>
          Director, CIT Kokrajhar
        </p>
      </div>
    </Layout>
  );
};

export default MessageD;
