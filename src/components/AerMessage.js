import React, { useEffect } from "react";
import Layout from "./Layout";

const Messaget = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Dean AER Message">
      <div>
        <h1 className="msgh">Dean Alumni Message</h1>
        <p className="msgp">
          I am delighted to address you as the Dean of Alumni and External
          Relations for the Training and Placement department of CIT Kokrajhar.
          It gives me immense pleasure to share with you the remarkable
          achievements of our alumni, who have consistently been placed in top
          organizations across various industries.{" "}
        </p>
        <br />
        <p className="msgp">
          CIT Kokrajhar has built a reputation for producing highly skilled and
          qualified engineers and researchers. Our institution takes pride in
          nurturing talent and providing a conducive learning environment that
          fosters excellence. As a result, our alumni have emerged as leaders
          and trailblazers in their respective fields, making significant
          contributions to the organizations they are associated with. We invite
          companies and organizations to seize this golden opportunity and tap
          into the talent pool of CIT Kokrajhar. By recruiting our alumni, you
          gain access to a pool of exceptional individuals who possess a deep
          understanding of their subjects, strong problem-solving skills, and a
          drive for continuous growth and innovation. Our alumni have proven
          their mettle in diverse domains, from engineering and technology to
          research and development. At CIT Kokrajhar, we prioritize equipping
          our students with the knowledge, skills, and practical experience
          necessary to excel in their chosen careers. Our dedicated faculty,
          state-of-the-art infrastructure, and industry collaborations ensure
          that our graduates are well-prepared to tackle real-world challenges.{" "}
        </p>
        <br />
        <p className="msgp">
          By partnering with CIT Kokrajhar, companies and organizations have the
          unique opportunity to benefit from the best quality engineers and
          researchers who can drive your organization's growth and success. We
          encourage you to explore the talents and potential of our alumni and
          witness firsthand the difference they can make within your
          organization. We look forward to forging long-lasting partnerships and
          providing you with outstanding professionals who will contribute to
          your organization's goals and objectives. Feel free to reach out to
          our Training and Placement department for further information or to
          initiate the recruitment process. Thank you for considering CIT
          Kokrajhar as your preferred destination for recruiting top-quality
          talent.
        </p>
        <br />
        <p className="cred">Dr Pranav Kumar Singh</p>
        <p className="cred" style={{ marginBottom: "2vw" }}>
          Dean Alumni & External Relations, CIT Kokrajhar
        </p>
      </div>
    </Layout>
  );
};

export default Messaget;
