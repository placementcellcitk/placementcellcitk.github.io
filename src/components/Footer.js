import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                Central Institute of Technology Kokrajhar
                <br />
                PO: Rangalikhata/Balagaon
                <br />
                Kokrajhar (BTC)
                <br />
                Assam, 783370
                <br />
                India
              </p>
              <p>
                <a href="mailto:tnpcell@cit.ac.in">tnpcell@cit.ac.in</a>
                <br></br>

                <a
                  href="https://www.linkedin.com/school/t-p-cell-cit-kokrajhar/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="linkedin-icon"
                  />
                </a>
                <a
                  href="https://www.facebook.com/OfficialCITKokrajhar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="facebook-icon"
                  />
                </a>
              </p>
            </div>

            <div className="footer-col1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.307224809649!2d90.3026385!3d26.4780512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f4d277d13e8d%3A0x233749495bfdb465!2sCentral%20Institute%20of%20Technology%2C%20Kokrajhar!5e0!3m2!1sen!2sin!4v1689160256655!5m2!1sen!2sin"
                width={600}
                height={190}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Central Institute of Technology, Kokrajhar"
              />
            </div>

            <div className="footer-col2">
              <h2>Links</h2>
              <p>
                <a href="https://www.cit.ac.in/" target="blank">
                  CITK main site
                </a>
              </p>
              <p>
                <a href="http://centrallibrary.cit.ac.in/" target="blank">
                  Central Library CITK
                </a>
              </p>
              <p>
                <a href="https://alumni.cit.ac.in/" target="blank">
                  Alumni Association
                </a>
              </p>
              <p>
                <a href="https://codingclub.cit.ac.in/" target="blank">
                  Coding Club CITK
                </a>
              </p>
              <p>
                <a href="https://www.techcracy22.in/" target="blank">
                  Technical Fest
                </a>
              </p>
              <p>
                <Link to="/howToReach">How to Reach CITK</Link>
              </p>
              <p>
                <Link to="/Facilities">Facilities</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          <strong>
            {" "}
            SOME RIGHTS RESERVED © 2023 | CITK | Developed & Managed By{" "}
          </strong>{" "}
          <a href="https://github.com/Devansh98350" target="none">
            <strong>Devanshu kumar</strong>
          </a>{" "}
          <strong> & </strong>{" "}
          <a href="https://github.com/Amarjeet2909" target="none">
            <strong>Amarjeet Kumar Singh</strong>
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default footer;
