import React, { useEffect } from "react";
import Layout from "./Layout";

const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Placement Form CITK">
      <div style={{ backgroundColor: "white" }}>
        <h1 className="abt0">
          Welcome To the Placement & Internship season 2023-24
        </h1>
        <h3 className="abt2">
          (Recruiters are requsted to fill below forms for the Placement &
          Internship drives)
        </h3>
        <div class="wrapper">
          <div class="more animate-intro">
            <a
              class="smoothscroll button stroke first"
              href="https://forms.gle/Azjupqg9ykPc6mN27"
              target="_blank"
              rel="noreferrer"
            >
              Placement Drive Form
            </a>
            <a
              class="smoothscroll button stroke second"
              href="https://forms.gle/pUxM4Cqydvkc1vuX7"
              target="_blank"
              title="View Our Brochure"
              rel="noreferrer"
            >
              Internship Drive Form
            </a>
            {/* <Link
              className="smoothscroll button1 stroke second"
              to="/"
              title="View Our Brochure"
              rel="noreferrer"
            >
              Diploma Placement Drive Form
            </Link> */}
          </div>
        </div>
        <div className="about-text-wrapper">
          <div className="abto-text">
            <p>
              We extend a warm invitation to all esteemed recruiters and
              organizations to participate in the Placement Drive for Final year
              B.Tech and M.Tech students, as well as the Internship Drive for
              Pre-final and Final year students, for the season 2023-24. At CIT
              Kokrajhar, we take immense pride in our student's academic
              excellence, practical skills, and dedication to becoming future
              leaders in their respective fields.
            </p>
            <p>
              Once you register our team will contact you soon. For any further
              information or clarification, please feel free to reach out to our
              Placement Cell at tnpcell@cit.ac.in or Contact our respective TPC's. Thank you for considering Central
              Institute of Technology Kokrajhar as your preferred destination
              for recruitment and internships.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
