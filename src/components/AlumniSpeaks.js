import React, { useEffect } from "react";

import AlokNath from "../assets/alumni/AlokNath.jpeg";
import BhargavDas from "../assets/alumni/BhargavDas.jpeg";
import BijitDas from "../assets/alumni/BijitDas.jpeg";
import DwimaluBrahma from "../assets/alumni/DwimaluBrahma.jpeg";
import NinmoyDebnath from "../assets/alumni/NinmoyDebnath.jpeg";
import PrastutiKonch from "../assets/alumni/PrastutiKoch.jpeg";
import PrithwirajAdhikary from "../assets/alumni/PrithwirajAdhikary.jpeg";
import RahulRai from "../assets/alumni/RahulRai.jpeg";
import Sajalchakraborty from "../assets/alumni/SajalChakraborty.jpeg";
import SandeepPandey from "../assets/alumni/SandeepPandey.jpeg";
import SanjivPradhan from "../assets/alumni/SanjivPradhan.jpeg";
import DigantarPaul from "../assets/alumni/DigantarPaul.jpeg";
import Layout from "./Layout";

const AlumniCard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <figcaption>
          <h3>{props.name}</h3>
          <p style={{ margin: "0 20px", textAlign: "justify" }}>
            {props.message}
          </p>
          <p className="contact-detail">
            <strong>Current Company:</strong> {props.company}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <Layout title="Alumni  CITK">
        <div className="contact-outer" style={{ backgroundColor: "white" }}>
          <div className="placement-team">
            <h1 className="placement-team-heading">Alumni Speaks</h1>
            <div className="placement-coordinators">
              <div className="placement-coordinators-wrapper">
                <AlumniCard
                  img={AlokNath}
                  alt="Alok Nath"
                  name="Alok Nath"
                  message=" As an alumnus of CIT Kokrajhar, I am excited to endorse the exceptional talent emerging from our esteemed institute. We take immense pride in the growth and success of our institute. We have witnessed firsthand the transformative power of the education provided at CITK, and it is with confidence that I recommend its graduates to various esteemed organization. Their talent, combined with a dedication to excellence, makes them valuable assets who can make significant contributions to your team and drive innovation within the organization.I encourage recruiters to connect with the placement cell of CITK to explore potential recruitment opportunities and engage with these talented individuals."
                  company="Walmart"
                />
                <AlumniCard
                  img={SandeepPandey}
                  alt="Dr. Sandeep Pandey"
                  name="Dr. Sandeep Pandey"
                  message="As an alumnus of the CIT Kokrajhar, I am delighted to witness the remarkable progress made by the TnP cell in providing quality placements, internships, and higher education opportunities for our students. The cell's commitment to bridging the gap between academia and industry has been instrumental in nurturing the talents of our students and preparing them for the challenges of the professional world.To my fellow alumni, let us take pride in the accomplishments of our alma mater's TnP cell and support its endeavors in every possible way. Together, we can contribute to the growth and success of our beloved institution."
                  company="Samsung"
                />
                <AlumniCard
                  img={BhargavDas}
                  alt="Bhargav Das"
                  name="Bhargav Das"
                  message="As a former student of CIT Kokrajhar, I am delighted to support the exceptional emerging talent from our esteemed institution. Throughout my time at CIT, I had the privilege of observing the unwavering commitment, intellect, and enthusiasm demonstrated by our students. The rigorous academic curriculum, complemented by practical experiences and collaborative projects, has nurtured individuals who possess both the technical aptitude and the mindset necessary to excel in their respective fields. In addition to their technical expertise, they embody essential qualities such as critical thinking, problem-solving, effective communication, and teamwork that are indispensable in today's professional arena."
                  company="Siemens Digital"
                />
              </div>
            </div>
            <div className="placement-coordinators">
              <div className="placement-coordinators-wrapper">
                <AlumniCard
                  img={SanjivPradhan}
                  alt="Sanjiv Pradhan"
                  name="Sanjiv Pradhan"
                  message="I consider myself very lucky to have received an incredible level of support and guidance from the teaching staff at CIT Kokrajhar. The educators at CIT Kokrajhar are not only highly knowledgeable in their fields but also genuinely dedicated to their students' success. They went above and beyond, making themselves readily available for one-on-one consultations and providing comprehensive explanations."
                  company="Klar"
                />
                <AlumniCard
                  img={BijitDas}
                  alt="Bijit Das"
                  name="Bijit Das"
                  message="As a former student at CITK, I have fond memories of the institution and a deep appreciation for how it shaped my intellectual and personal growth. I was able to step outside of my comfort zone and push myself past my limitations in the supportive environment of my institution.If it weren't for this place, I wouldn't be where I am."
                  company="Cisco"
                />
                <AlumniCard
                  img={Sajalchakraborty}
                  alt="Sajal Chakraborty"
                  name="Sajal Chakraborty"
                  message="As a proud alumnus of CITK, I hold cherished memories of my time at our beloved institute. Looking back, I am filled with gratitude for the experiences, friendships, and support that shaped my journey.Our esteemed faculty members are not only knowledgeable but also incredibly supportive. Engage with them, seek their guidance, and let them inspire you to explore new horizons."
                  company="Evertz"
                />
              </div>
            </div>
            <div className="placement-coordinators">
              <div className="placement-coordinators-wrapper">
                <AlumniCard
                  img={RahulRai}
                  alt="Rahul Rai"
                  name="Rahul Rai"
                  message="CITK holds a special place in our hearts, for it has not only nurtured our minds but also shaped our lives in countless ways.he faculty, with their expertise and unwavering support, inspired us to dream big and pushed us beyond our limits. Their guidance has been instrumental in shaping our careers and instilling in us a lifelong love for learning."
                  company="GalaxE.Solutions"
                />
                <AlumniCard
                  img={PrastutiKonch}
                  alt="Prastuti Koch"
                  name="Prastuti Koch"
                  message="The 4 years of Engineering at CITK was really Amazing.Learnt a lot from the professors and they were very much helpful.Made some really good friends.Participated in the Tech/cultural events organise by college.A memorable journey of college that I'll cherish forever"
                  company="LTIMindtree"
                />
                <AlumniCard
                  img={PrithwirajAdhikary}
                  alt="Prithwiraj Adhikary"
                  name="Prithwiraj Adhikary"
                  message=" It fills me with immense pride to be a part of the vibrant alumni community of CIT Kokrajhar. As a graduate of the Computer Science and Engineering program, I had the privilege of receiving a quality education that has shaped my career and provided me with a strong foundation."
                  company="Fidelity Investments"
                />
              </div>
            </div>
            <div className="placement-coordinators">
              <div className="placement-coordinators-wrapper">
                <AlumniCard
                  img={NinmoyDebnath}
                  alt="Ninmoy Debnath"
                  name="Ninmoy Debnath"
                  message="It is great to say that I got a chance to learn Computer Science and Engineering at CIT Kokrajhar. Also, choosing CSE as a B.Tech course has entirely changed my life. Educators at CIT kokrajhar are not only having high knowledge in their field but also helping students with their career success. Thanks to all my teachers, and friends who helped me to learn and also to my institute for giving me that opportunity."
                  company="Dell EMC"
                />
                <AlumniCard
                  img={DwimaluBrahma}
                  alt="Dwimalu Brahma"
                  name="Dwimalu Brahma"
                  message="As an alumnus of CIT Kokrajhar, I wanted to reach out and express my heartfelt gratitude for the invaluable education and experiences I gained during my time at your esteemed institution. The knowledge imparted by the exceptional faculty, the diverse community that fostered growth, and the robust support system shaped my character and prepared me for success in the real world. The memories I made and the lifelong friendships I forged are treasured treasures. I am forever indebted to CIT Kokrajhar for laying the foundation of my professional journey. Keep inspiring and nurturing future generations of scholars."
                  company="NIC(MeitY)"
                />
                <AlumniCard
                  img={DigantarPaul}
                  alt="Digantar Paul"
                  name="Digantar Paul"
                  message="CITK has played a very important role in structuring student's future..The infrastructure and resources here are one of the best which has helped lots of students in gaining knowledge and experience to develop their overall personalities. Central Library has been of the key facilities which the students have utilised the most. The faculty members here are very much helpful in guiding students in academics and also are open to discussing about student's careers ."
                  company="OpenFive"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default card;
