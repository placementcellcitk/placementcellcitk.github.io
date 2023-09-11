import React, { useEffect } from "react";
import Layout from "./Layout";

const Why = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Why CIT Kokrajhar">
      <div className="whyus-o-container">
        <div className="whyus-container">
          <h1 className="whyus-h1">Why Recruit at CITK?</h1>
          <p>
            <strong>CIT Kokrajhar</strong> encourages its students to balance
            their academics and co-curricular activities. This allows for an
            all-round development, as evidenced by the numerous projects
            undertaken and the participation in sports and cultural events. This
            is evident from the wide repositories of projects that they have
            done as well as their participation in sports and cultural events.
          </p>
          <p>
            The institute also encourages the students to showcase their
            research in national conferences and workshops. The students work as
            Teaching Assistants, guiding and aiding the students in the batches
            that are junior to them.
          </p>
          <h2 className="special">The Academic Program</h2>
          <br></br>
          <h3>Teaching Methodology</h3>
          <p>
            Great emphasis during the classes is laid on core fundamentals and
            concepts. The examinations are designed to reflect the understanding
            of the fundamentals in practical fields.
          </p>
          <h3>Teaching Assistantship</h3>
          <p>
            Meritorious Post-graduate students are offered teaching
            assistantship which involves assisting instructors in practically
            everything related to the course like conducting lectures,
            laboratory sessions, tutorials and course planning.
          </p>
          <h3>Departmental and Institute Electives</h3>
          <p>
            In order to boost interest in other faculties of technology, the
            students can take up electives and/or audit courses from department
            other than their core area of specialization.
          </p>
          <h3>Industrial Exposure</h3>
          <p>
            Students are exposed to latest industry practices through several
            industrial visits during their course. Students are also encouraged
            to undergo industrial training during their summer vacations.
          </p>
          <h3>Institute programs</h3>
          <p>
            To encourage the faculty and student interaction, we organize
            various seminars, lectures and workshops. Through these the students
            get an opportunity to interact with eminent personalities from the
            corporate world and the academia.
          </p>
          <h3>Research & Development</h3>
          <p>
            It is mandatory for all B.Tech, M.tech and PhD students to take up
            projects under the supervision of the faculty. These comprise basic
            development and application oriented research projects. Students are
            also encouraged to publish papers in peer reviewed national and
            international conferences and journals.
          </p>
          <h2 className="special">Admission Criteria</h2>
          <p>
            B.Tech Entrance at CIT Kokrajhar is based on JEE Mains score or
            CITKEE score. As the students are admitted through the esteemed JEE
            Mains and represents the top 2% of the candidates that appear for
            the exam nationwide, they are handpicked from the garden of
            knowledge and critical thinking.{" "}
          </p>
          <p>
            Admissions to M.Tech program is made throuh Graduate Aptitude Test
            Engineering (GATE) and Centralized Couselling for M.Tech.
          </p>
          <p>
            These students are enriched with both qualitative and quantitative
            skills, thus they make up for the best in class.
          </p>
          <h2 className="special">Faculty</h2>
          <p>
            The Institute is privileged to host faculty who have distinguished
            themselves as teachers, researchers, and consultants of
            extraordinary calibre. Faculty members at the institute have
            acquired years of research and teaching experience in world-class
            institutions across the globe, and themselves are products of some
            of the most hallowed institutions in the India. In addition, many
            have substantial industrial experience.
          </p>
          <p>
            Apart from delivering quality education,they motivate students to
            engage in cutting edge research and are highly inclined towards
            ideation and innovation. Our faculty have published various national
            and international journals and conference proceedings and organized
            several workshops.
          </p>
          <h2 className="special">Projects</h2>
          <p>
            Projects are an integral part of the education program. Students are
            required to do group projects/research in many courses that they are
            taught. Students are also provided with an option of the independent
            study which enables them to do research in the field of their
            interest.
          </p>
          <h2 className="special">Technical Clubs</h2>
          <p>
            CIT Kokrajhar has several technical clubs which help students to get
            expertise in their field of interest and also host regular contests
            on inter college level. The Coding Club (Coding Society of CIT
            Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular
            training and workshops for computer science engineering. The
            Robotics club regularly hosts distinguished lectures , hardware
            hackathons and problem solving using R&D, IoT etc. Konstruct (Civil
            Society of Innovative Engineers ) of CIT Kokrajhar works on
            renewable sources of energy and conducts AutoCAD, design and
            drafting etc workshops for Civil engineering students.
          </p>
          <p>
            Our Coding clubs regularly organises coding competitions on various
            platforms to help the students strengthen their coding skills. The
            AI and Devlopers Clubs of CIT Kokrajhar frequently organise
            workshops on trending technologies in Machine learning and
            Web/Android Development respectively.Our students are honing their
            skills on websites like Topcoder,SPOJ, CodeChef etc. in various
            languages. Apart from this, students won many hackathons across the
            nation.
          </p>
          <h2 className="special">All Round Development</h2>
          <p>
            Participation in Extracurricular Activities throughout the year
            leads to 360 degree development of an individual. Students also
            participate in NSS and NCC and spread awareness in the society.
          </p>
          <p>
            To promote the cause of technology and to ignite the young talents
            of our country, the institute celebrates its technical fest
            annually, named
            <strong> ‘Techcracy’</strong>. Since the first chapter of{" "}
            <strong>Techcracy</strong>, mass convergence of students from all
            over the country in different events, workshops and seminars have
            increased in leaps and bounds. It has also hosted a glut of talks
            and symposiums of some of very distinguished personalities availing
            some very praiseworthy and polite remarks from them about the
            institute and its students which has boosted our students with a lot
            more zeal and enthusiasm.
          </p>
          <p>
            The cadence of life touches right note when it blossoms with all
            colors. Brushing of all shades of human emotion and artistic flair
            plays an important role in an all-round development. Our cultural
            fest <strong>Ecstasy</strong> provides opportunity to all the
            students for the realization of this very purpose. The event is a
            culmination of sound and lights, of music and arts, of dances and
            drama, of thoughts and words, the perfect place to bring out the
            artist in everyone and to break the rut of daily life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Why;
