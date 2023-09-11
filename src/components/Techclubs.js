import React, { useEffect } from "react";
import cc2 from "../assets/techclubs/CC2.jpg";
import ca2 from "../assets/techclubs/gdsc.png";
import cyc1 from "../assets/techclubs/CYC1.jpeg";
import dcomm from "../assets/techclubs/dcomm.jpg";
import robo from "../assets/techclubs/robo.png";
import design from "../assets/techclubs/design.jpeg";
import ai from "../assets/techclubs/ai.jpeg";
import astrophysics from "../assets/techclubs/astro-min.jpg";
import kons from "../assets/techclubs/kons.jpeg";
import Layout from "./Layout";

const TechClubs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const boxes = document.querySelectorAll(".procedure-wrapperr");
    const handleScroll = () => {
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;
        const isVisible = boxTop < window.innerHeight && boxBottom >= 0;

        if (isVisible && !box.classList.contains("animation")) {
          const animation = box.querySelector(".animation");
          box.classList.add("animation");
          if (animation) {
            animation.style.animationName = "fadeIn";
            animation.style.animationPlayState = "running";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Your JSX code for the TechClubs component goes here
    <Layout title="Technical Clubs CITK">
      <>
        <div className="procedure-wrapperrr">
          <h2 className="special">Technical Clubs of CITK</h2>
          <p class="Right">
            Technical clubs play a crucial role in fostering technical skills,
            knowledge sharing, innovation, and overall personal and professional
            development of students. It provides a platform for students to
            engage in technical activities and enhance their skills in specific
            areas of interest. In CIT Kokrajhar, we have the following technical
            clubs:
          </p>
          <ul className="custom-list">
            <li class="Right">
              <strong>GDSC CIT Kokrajhar</strong>
            </li>
            <li class="Right">
              <strong>Coding Club</strong>
            </li>
            <li class="Right">
              <strong>Cyber Security Club</strong>
            </li>
            <li class="Right">
              <strong>AI Club</strong>
            </li>
            <li class="Right">
              <strong>DevCom Club</strong>
            </li>
            <li class="Right">
              <strong>Robotics Club</strong>
            </li>
            <li class="Right">
              <strong>Design Club</strong>
            </li>
            <li class="Right">
              <strong>Astrophysics Club</strong>
            </li>
            <li class="Right">
              <strong>Konstruct Club</strong>
            </li>
          </ul>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">GDSC CIT Kokrajhar</h2>
          <div className="club-info">
            <img src={ca2} alt="" className="logo.img" />
            <p style={{ fontSize: "18px" }}>
              The Google Developer Student Clubs (GDSC) at CIT Kokrajhar is an
              inspiring community of tech enthusiasts and learners who come
              together to foster innovation, collaboration, and skill
              development. With a strong foundation of students passionate about
              technology, GDSC CIT Kokrajhar serves as a hub for knowledge
              sharing, hands-on workshops, and engaging events.In essence, GDSC
              CIT Kokrajhar is a vibrant platform that nurtures the talents of
              students, fosters a culture of continuous learning, and
              contributes to the growth of both individuals and the tech
              community as a whole.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:gdsccitk@cit.ac.in"> gdsccitk@cit.ac.in</a>
                </li>
                <li>
                  <strong>Website:</strong>
                  <a
                    href="https://gdsc.community.dev/central-institute-of-technology/"
                    target="none"
                  >
                    {" "}
                    gdsc.cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Coding Club CITK</h2>
          <div className="club-info">
            <img src={cc2} alt="" className="logo.img" />
            <p style={{ fontSize: "18px" }}>
              The Coding Club CITK is all about imparting and assimilating
              Coding knowledge among the interested. It aims to conduct events
              related to the field and focuses on activities such as Competitive
              Programming, Coding Competitions, Seminars, Industry Talks, etc.
              The club regularly organises coding competitions on various
              platforms to help the students strengthen their coding skills. The
              club serve as platforms for enthusiasts to come together, learn,
              collaborate, and grow in the field of coding and programming. It
              fosters a sense of community, provide learning opportunities, and
              facilitate personal and professional development in the coding
              realm.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:codingclub@cit.ac.in">
                    {" "}
                    codingclub@cit.ac.in
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>
                  <a href="https://codingclub.cit.ac.in/" target="none">
                    {" "}
                    codingclub.cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Cyber X Secure CLub</h2>
          <div className="club-info">
            <img src={cyc1} alt="" className="cyc1" />
            <p style={{ fontSize: "18px" }}>
              Cyber X Secure is the cyber security club of CIT Kokrajhar and its
              prior mission is to build a community and provide a common
              platform to learn locally and compete globally. Key Activities of
              the club includes organizing various talks, seminars, workshops
              and hackathons as well as summer and winter schools. The club
              mainly focuses on Cyber Security, Pen Testing, Web Security, App
              Security, Artificial Intelligence in Security, and Blockchain
              domain .
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:cyberxsecure@cit.ac.in">
                    {" "}
                    cyberxsecure@cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">DevComm Club</h2>
          <div className="club-info">
            <img src={dcomm} alt="" className="dcomm" />
            <p style={{ fontSize: "18px" }}>
              DevComm is the Developers Club of CITK which focuses on the field
              of Web and App Development among the interested. The Club aims to
              conduct events related to the field and focuses on activities such
              as Web/App Development, Competitions, Seminars, Industry Talks,
              etc. The Club aims to contribute to the society on Web/App
              Development from the members with their skills and talent.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:devcom@cit.ac.in"> devcom@cit.ac.in</a>
                </li>
                <li>
                  <strong>Website:</strong>
                  <a href="http://devcom.cit.ac.in/" target="none">
                    {" "}
                    devcom.cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">AI Club</h2>
          <div className="club-info">
            <img src={ai} alt="" className="ai" />
            <p style={{ fontSize: "18px" }}>
              The AI Club welcomes student to the exciting and fast growing
              world of Artificial Intelligence. The club serves as a place for
              the members to discuss the recent trends related to Artificial
              Intelligence and Machine Learning. The focus will be on developing
              and strengthening systems thinking, problem-solving, analysis,
              design, research, teamwork and readiness for lifelong learning in
              areas of Artificial Intelligence, Machine Learning, and
              Deep-Learning.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:aiclub@cit.ac.in"> aiclub@cit.ac.in</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Robotics Club</h2>
          <div className="club-info">
            <img src={robo} alt="" className="robo" />
            <p style={{ fontSize: "18px" }}>
              The Robotics Club is a community of individuals passionate about
              robotics and automation. It provides a platform for students to
              explore, learn, and collaborate in the field of robotics. The club
              typically consists of students from various disciplines who come
              together to share their knowledge and enthusiasm for robotics. The
              club often invites experts and professionals from the industry to
              deliver talks, conduct workshops, or mentor the members. These
              interactions provide valuable insights into the current trends,
              challenges, and opportunities in the field of robotics.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:roboticsclub@cit.ac.in">
                    {" "}
                    roboticsclub@cit.ac.in
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>
                  <a href="https://roboticsclub.cit.ac.in/" target="none">
                    {" "}
                    roboticsclub.cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Design Club</h2>
          <div className="club-info">
            <img src={design} alt="" className="design" />
            <p style={{ fontSize: "18px" }}>
              Design Club is a creative community dedicated to exploring and
              promoting various aspects of design. It brings together
              individuals who share a passion for design and offers a platform
              for collaboration, learning, and inspiration. In Design Club,
              members engage in activities such as workshops, design challenges,
              and discussions, where they can enhance their design skills and
              knowledge. They explore different design disciplines, including
              graphic design, user experience (UX) design, product design, and
              more.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:designcircleclub@cit.ac.in">
                    {" "}
                    designcircleclub@cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Konstruct Club</h2>
          <div className="club-info">
            <img src={kons} alt="" className="design" />
            <p style={{ fontSize: "18px" }}>
              KONSTRUCT is a thriving Civil Engineering club at the Central
              Institute of Technology Kokrajhar. The club is dedicated to
              promoting knowledge, innovation, and practical skills in the field
              of civil engineering among its members. It provides a platform for
              students interested in civil engineering to come together,
              collaborate, and expand their knowledge of the subject outside of
              the classroom. Throughout the academic year, the club organizes a
              variety of activities and events, including workshops, seminars,
              guest lectures, and hands-on practical sessions. The Club goes
              beyond the classroom, building bridges to the community with
              impactful projects that uplift locals and showcase civil
              engineering's power, and craft the future of social
              responsibility.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:u20cel2060@cit.ac.in">
                    {" "}
                    konstructclub@cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="procedure-wrapperr">
          <h2 className="special">Astrophysics Club</h2>
          <div className="club-info">
            <img src={astrophysics} alt="" className="design" />
            <p style={{ fontSize: "18px" }}>
              The Astrophysics Club is a vibrant and enthusiastic community that
              brings together students with a shared passion for the mysteries
              of the cosmos. Comprised of astronomy enthusiasts, physics majors,
              and curious minds alike, the club serves as a platform for
              exploring the wonders of the universe. Regular meetings involve
              engaging discussions, guest lectures from esteemed professors and
              researchers, and exciting stargazing sessions using the college's
              telescope. The club also organizes field trips to observatories
              and space-related events, fostering a deeper understanding of
              astrophysical phenomena and the latest developments in the field.
              <ul className="custom-list">
                <li>
                  <strong>Email Id: </strong>
                  <a href="mailto:astrophysicsclub@cit.ac.in">
                    {" "}
                    astrophysicsclub@cit.ac.in
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default TechClubs;
