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
          Dear Students, faculty, and esteemed guests,It gives me great pleasure
          to extend a warm welcome to all of you as we unveil the upgraded
          Training and Placement (T&amp;P) Cell website at the Central Institute
          of Technology (CIT) Kokrajhar. As the Director of this prestigious
          institution, I am delighted to witness the launch of this enhanced
          platform, which aims to strengthen the bond between our students,
          industry partners, and the academic community. The T&amp;P Cell is
          pivotal in connecting our talented students with various industries,
          fostering their professional growth, and providing excellent career
          opportunities.{" "}
        </p>
        <br />
        <p className="msgp">
          With this upgraded website, we are taking a significant step forward
          in enhancing our outreach and making vital information easily
          accessible to all stakeholders. The website will serve as a central
          hub for students to explore placement opportunities, internships, and
          career guidance resources. It will also showcase the achievements and
          success stories of our students, demonstrating their potential and
          capabilities to potential employers. Moreover, our industry partners
          will find this platform invaluable in identifying and connecting with
          the exceptional talent that CIT Kokrajhar produces year after year. In
          addition to offering a wealth of information, the T&amp;P Cell website
          will enable students to register for placements, access placement
          schedules, and receive notifications regarding campus recruitment
          drives. The comprehensive database of companies, profiles of visiting
          recruiters, and valuable placement statistics will empower our
          students to make informed decisions about their career paths.
        </p>
        <br />
        <p className="msgp">
          {" "}
          I extend my heartfelt gratitude to the entire T&amp;P Cell team for
          their tireless efforts in developing this upgraded website. Their
          dedication and commitment to providing our students with the best
          possible opportunities are truly commendable. I would also like to
          express my appreciation to our esteemed industry partners for their
          continuous support and collaboration. Your engagement with our
          students is instrumental in bridging the gap between academia and
          industry, and we look forward to strengthening our relationship
          further through this enhanced platform.
        </p>
        <br />
        <p className="msgp">
          Wishing you all the very best in your future endeavors.
        </p>
        <br />
        <p className="cred">Prof. Hemanta Kumar Kalita</p>
        <p className="cred" style={{ marginBottom: "2vw" }}>
          Director, CIT Kokrajhar
        </p>
      </div>
    </Layout>
  );
};

export default MessageD;
