import React, { useEffect } from "react";
import Card from "./Card";
import agm from "../assets/images/tpo.jpg";
import ifti from "../assets/team23/ifti.jpeg";
import amarjeet from "../assets/team23/amarjeet.png";
import devanshu from "../assets/team23/devanshu.png";
import ashutosh from "../assets/team23/ashutosh.jpg";
import chand from "../assets/team23/chand.jpg";
import pras from "../assets/team23/pras.png";
import rahan from "../assets/team23/rahan.jpg";
import bhaskar from "../assets/team23/Bhaskar.jpeg";
import Niloptal from "../assets/team23/Nilotpal.jpg";
import tina from "../assets/team23/Tina.jpeg";
import abdur from "../assets/team23/Adbur.jpeg";
import Layout from "./Layout";

const ContactUs = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Team -CITK">
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={agm}
                alt="Dr. Agile Mathew"
                name="Dr. Agile Mathew"
                isTeacher={false}
                position="Training & Placement Officer"
                email="tnp@cit.ac.in"
                linkedin="https://www.linkedin.com/in/agile-mathew-7365a6181/"
                islinkedin={true}
                phone="+91-9957817471"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={ifti}
                alt="Iftiazur Rahman"
                name="Iftiazur Rahman"
                isTeacher={false}
                position="Overall Coordinator"
                email="tnpcell@cit.ac.in "
                phone="+91-9101176748"
                linkedin=" https://www.linkedin.com/in/iftiazur-rahman-b19192252"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={amarjeet}
                alt="Amarjeet Kumar Singh"
                name="Amarjeet Kumar Singh"
                isTeacher={false}
                position="Placement Coordinator CSE"
                email="tnpcell@cit.ac.in "
                phone="+91-9065389731"
                linkedin="https://www.linkedin.com/in/amarjeet-cse/"
                Github="https://github.com/Amarjeet2909"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
                isGithub={true}
              />
              <Card
                src={devanshu}
                alt="Devanshu Kumar"
                name="Devanshu Kumar"
                isTeacher={false}
                position="Placement Coordinator CSE"
                phone="+91-9262676870"
                email="tnpcell@cit.ac.in"
                linkedin="https://www.linkedin.com/in/devanshu-cse/"
                Github="https://github.com/Devansh98350"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
                isGithub={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={ashutosh}
                alt="Ashutosh Pandey"
                name="Ashutosh Pandey"
                isTeacher={false}
                position="Placement Coordinator ECE"
                linkedin="https://www.linkedin.com/in/ashutosh-pandey-679b8b25a/"
                islinkedin={true}
                phone="+91-8399829113"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={chand}
                alt="Chandramallika Das"
                name="Chandramallika Das"
                isTeacher={false}
                position="Placement Coordinator Civil Engg."
                linkedin="https://www.linkedin.com/in/chandramallika-das"
                islinkedin={true}
                phone="+91-8822846619"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={pras}
                alt="Prasanta Kumar Deuri"
                name="Prasanta Kumar Deuri"
                isTeacher={false}
                position="Placement Coordinator Civil Engg."
                linkedin="https://www.linkedin.com/in/prasanta-kumar-deuri-728322186"
                islinkedin={true}
                phone="+91-6001820816"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Niloptal}
                alt="Nilotpal Das"
                name="Nilotpal Das"
                isTeacher={false}
                position="Placement Coordinator IE"
                linkedin="https://www.linkedin.com/in/nilotpal-das-094559224"
                islinkedin={true}
                phone="+91-7002781195"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={tina}
                alt="Tina Poddar"
                name="Tina Poddar"
                isTeacher={false}
                position="Placement Coordinator IE"
                linkedin="https://www.linkedin.com/in/tina-podder-a09712227"
                islinkedin={true}
                phone="+91-9382372856"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={abdur}
                alt="Abdur Rouf Ahmed"
                name="Abdur Rouf Ahmed"
                isTeacher={false}
                position="Placement Coordinator MCD"
                linkedin="https://www.linkedin.com/in/rouf-ahmed-183720287"
                islinkedin={true}
                phone="+91-6901851739"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={bhaskar}
                alt="Bhaskar Jyoti Das"
                name="Bhaskar Jyoti Das"
                isTeacher={false}
                position="Placement Coordinator MCD"
                linkedin=" https://www.linkedin.com/in/bhaskar-jyoti-das-a38868190"
                islinkedin={true}
                phone="+91-7896937331"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={rahan}
                alt="Rahan Jyoti. Das"
                name="Rahan Jyoti. Das"
                isTeacher={false}
                position="Placement Coordinator FET"
                linkedin="https://www.linkedin.com/in/rahan-jyotikesh-das-826243254"
                islinkedin={true}
                phone="+91-8638698050"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
