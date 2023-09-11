import React, { useEffect } from "react";
import Layout from "./Layout";

const Procedure = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Placement Procedure CITK">
      <div className="procedure-outer">
        <div className="procedure-wrapper">
          <h2 className="special">Placement Procedure</h2>
          <ul className="custom-list">
            <li>
              Organization fills the Placement Form containing details of the
              job offer (pay package, place of posting, allowances and other
              bonuses). Organizations can also directly sent the proposal to
              Training and Placement Cell, CITK (
              <a href="mailto:tnpcell@cit.ac.in">tnpcell@cit.ac.in</a>).
            </li>
            <li>
              The organization details along with job offer is made available to
              the students on a private group, requesting them to apply.
            </li>
            <li>
              Training and Placement Cell, CITK allots date(s) to an
              organization for campus placements. The organization confirms the
              date(s) to Training and Placement Cell, CITK.
            </li>
            <li>
              The list of the students who have applied is provided to the
              organization along with their Resumes.
            </li>
            <li>
              Organizations come to campus on the allotted date(s) and conduct
              tests and/or interviews as per their recruitment process.
            </li>
            <li>
              The organization is expected to furnish the list of selected
              candidates at the end of assigned interview slot, preferably on
              the day of campus visit.
            </li>
            <li>
              Training and Placement Cell, CITK also coordinates the signing of
              offer letter by students who have been selected to ensure that
              they reach the organization/company asap.
            </li>
          </ul>
        </div>
        <div className="procedure-wrapper">
          <h2 className="special">Job Policy</h2>
          <p>
            Companies visit campus and select students as per their recruitment
            drive.
          </p>
          <p>
            <strong>
              To a student finally selected by a company after all testing and
              interview rounds, the company may offer :
            </strong>
          </p>
          <div className="sub-part">
            <h2>Full time job offer</h2>
            <p>
              The selected student will join company in June 2024 as full time
              employee.
            </p>
            <h2>Internship</h2>
            <p>
              B. Tech 3rd year students are eligible for{" "}
              <strong>2 months</strong> summer internship. The student will join
              the company during the summer / winter brakes as an intern for a
              period of 2 months.
            </p>
            <p>
              B. Tech. 4th year students are eligible for{" "}
              <strong>2 months</strong> internship. The student will join the
              company as an intern for a period of 2 months.
            </p>
          </div>
        </div>
        <div className="procedure-wrapper">
          <div className="placement-policy-heading">
            <h2 className="special">Placement Policy</h2>
            <h2 className="ph-subheading">Eligibility & Registration</h2>
            <p>
              The classification of a company will based on the criteria of pay
              packages(CTC) and work profile. The two classes being:
            </p>
            <ul className="custom-list">
              <li>
                All full time final year students (B.Tech, M.Tech and Ph.D.) of
                CIT Kokrajhar are eligible to participate in the recruitment
                process for placements through the Training and Placement (T&P)
                Cell except those Ph.D. students who have not submitted their
                synopsis.
              </li>
              <li>
                Students carrying specific course backlog(s) may or may not be
                allowed to appear in the recruitment process as per the
                eligibility criteria of the concerned company/ organization.
              </li>
              <li>
                All students eligible for on-campus jobs have to submit their
                details online to the T&P Cell. Only after the successfull
                submission, their resume and other details will be sent to the
                hiring organization.
              </li>
            </ul>
            <h2 className="ph-subheading">
              Student Conduct and Disciplinary Policy
            </h2>
            <ul className="custom-list">
              <li>
                Absenteeism policy: In case a student remains absent from the
                recruitment process of a company for which he/she has confirmed
                his/her participation through his/her T&P student account,
                strict disciplinary action will be taken against the student.
              </li>
              <li>
                Using unfairmeans during any round of the recruitment process is
                a serious offence. Such students would be deregistered
                immediately and also will be referred to the concerned
                authorities for disciplinary action.
              </li>
            </ul>
            <h2 className="ph-subheading">Classification of Company</h2>
            <p>
              The classification of a company will based on the criteria of pay
              packages(CTC) and work profile. The two classes being:
            </p>
            <ul className="custom-list">
              <li>First Round Company</li>
              <li>Dream Round Company</li>
            </ul>
            <p>
              Overall CTC of a company includes joining bonus and all other
              perks, if applicable. Eligibility for a dream round company for a
              student will be decided on the basis of overall CTC.
            </p>
            <h2 className="ph-subheading">Job Offer for a student</h2>
            <ul className="custom-list">
              <li>
                If a student's name appears on the final shortlist declared
                after the Company's process through the Placement Cell, then
                that would be considered as a Job Offer to the student.
              </li>
              <li>
                A student will be out of campus placement process only if he/she
                gets an offer from a Dream Round company.
              </li>
              <li>
                Students getting a Job Offer from a First Round company are
                still eligible for further placements and only these students
                are allowed to upgrade to a Dream Round company.
              </li>
              <li>
                PPO Offer and off-campus placements are also considered as Job
                Offer, hence the same policy is applicable to them.
              </li>
            </ul>
            <h2 className="ph-subheading">Job Offer made by Company</h2>
            <ul className="custom-list">
              <li>
                The companies are requested to announce the result/ final
                shortlist on the day of campus visit.
              </li>
              <li>
                The company should hand over the duly signed hard copy of the
                final selection list to the placement cell.
              </li>
              <li>
                The company shall provide the offer letters to the Placement
                office and not directly to the students.
              </li>
              <li>
                The purview of the Placement Cell is restricted only to the
                offers made as part of the campus placement process.
              </li>
              <li>
                In case the company is unable to declare the result on the same
                day, then the student is allowed to participate in other
                companies until the result is declared. The final status will
                depend upon who declares the result first.
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Procedure;
