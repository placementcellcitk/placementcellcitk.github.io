import React, { useEffect } from "react";
import Card from "./Card";
import agm from "../assets/images/tpo.jpg";
import abhay from "../assets/team23/abhay.png";
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
import cse from "../assets/team23/cse.png";
import ie from "../assets/team23/IE.jpg";
import fet from "../assets/team23/FET.jpg";
import civil from "../assets/team23/CE.png";
import mcd from "../assets/team23/MCD.jpg";
import Layout from "./Layout";

const ContactUs = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Team -CITK"> 
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">TPO & Faculty Members</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={agm}
                alt="Dr. Agile Mathew"
                name="Dr. Agile Mathew"
                isTeacher={true}
                position="Training & Placement Officer | Faculty Member(ECE)"
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
                src={cse}
                alt="Mr. Bikramjit Choudhary"
                name="Mr. Bikramjit Choudhary"
                isTeacher={false}
                position="Faculty Member(CSE)"
                email="b.choudhury@cit.ac.in"
                linkedin="https://www.linkedin.com/in/bikramjit-choudhury-a75146168/"
                islinkedin={true}
                phone="+91-8638005168"  
                isPhone={true} 
                isEmail={true}
              />
              <Card
                src={mcd}
                alt="Dr. Bhaskar Saha"
                name="Dr. Bhaskar Saha"
                isTeacher={false}
                position="Faculty Member(MCD)"
                email="b.saha@cit.ac.in"
                linkedin="https://www.linkedin.com/in/dr-bhaskar-saha-7920a7a6/"
                islinkedin={true}
                phone="+91-9435560863"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={civil}
                alt="Dr. Yachang Omo"
                name="Dr. Yachang Omo"
                isTeacher={false} 
                position="Faculty Member(CE)" 
                email="y.omo@cit.ac.in "
                linkedin="https://www.linkedin.com/in/yachang-omo-471a3192/"
                islinkedin={true}
                phone="+91-7896697071"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={ie}
                alt="Dr. Rajesh Kondareddy"
                name="Dr. Rajesh Kondareddy"
                isTeacher={false}
                position="Faculty Member(IE)"
                email="r.kondareddy@cit.ac.in"
                linkedin="https://www.linkedin.com/in/rajesh-kondareddy-a2082a92/"
                islinkedin={true}
                phone="+91-7896863811"  
                isPhone={true} 
                isEmail={true}
              />
              <Card
                src={fet}
                alt="Mr. Abhijit Das"
                name="Mr. Abhijit Das"
                isTeacher={false}
                position="Faculty Member(FET)"
                email="a.das@cit.ac.in"
                linkedin="https://www.linkedin.com/in/abhijit-das-a031703a/"
                islinkedin={true}
                phone="+91-7399811494"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <h1 className="placement-team-heading">Student Co-ordinators</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={ifti}
                alt="Iftiazur Rahman"
                name="Iftiazur Rahman"
                isTeacher={false}
                position="Overall Placement Coordinator"
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
                isTeacher={true}
                position="Placement Coordinator CSE | Web Developer"
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
                isTeacher={true}
                position="Placement Coordinator CSE | Web Developer"
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
                src={abhay}
                alt="Abhay Chetri"
                name="Abhay Chetri"
                isTeacher={false}
                position="Overall Training Coordinator"
                linkedin="https://www.linkedin.com/in/abhayy143/"
                islinkedin={true}
                phone="+91-8133876807"
                email="tnpcell@cit.ac.in"
                isPhone={true}
                isEmail={true}
              />
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
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
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