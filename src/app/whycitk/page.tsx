"use client";
import { useState } from "react";
import CardOne from "@/components/whycitk/cardone";
import CardTwo from "@/components/whycitk/cardtwo";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("Academics");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Academics":
        return <CardOne />;

      case "Admission Criteria":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "The institution offers a broad spectrum of educational programs tailored to various interests and career goals. At the diploma level, students can pursue specialized courses in Engineering, Animation and Multimedia, with a range of intake capacities for each field. The undergraduate offerings include Bachelor of Technology (B. Tech) degrees in disciplines such as Electronics and Communication, Computer Science, and Civil Engineering, with options for direct, vertical, and lateral entry based on prior qualifications. Additionally, the Bachelor of Design (B. Des) program focuses on Multimedia Communication and Design, available through direct and vertical entry pathways.",
                "For postgraduate studies, the institution provides Master of Technology (M. Tech) programs in areas such as Water Resources, Green Energy Technology, and Food Engineering, as well as a Master of Design (M. Des) in Multimedia Communication and Design. The Ph.D. program is extensive, covering various research areas in Engineering, Science, Humanities, and Design, with specific eligibility criteria for each discipline. Admission requirements include educational qualifications, age limits, and other criteria tailored to ensure a well-rounded and inclusive approach to higher education.",
              ]}
            />
            <div className="flex justify-center mt-10 mb-14">
              <a
                href="/information_brouchure_diploma_degree_master_phd2024 (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                For more information Click here
              </a>
            </div>
          </div>
        );

      case "Faculty":
        return (
          <CardTwo
            paragraphs={[
              "The Institute is privileged to host faculty who have distinguished themselves as teachers, researchers, and consultants of extraordinary calibre. Faculty members at the institute have acquired years of research and teaching experience in world-class institutions across the globe, and themselves are products of some of the most hallowed institutions in India. In addition, many have substantial industrial experience.",
              "Apart from delivering quality education, they motivate students to engage in cutting-edge research and are highly inclined towards ideation and innovation. Our faculty have published various national and international journals and conference proceedings and organized several workshops.",
            ]}
          />
        );

      case "R&D Activities":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "At CIT Kokrajhar, a vibrant array of research projects reflects the institution&apos;s commitment to advancing knowledge across various fields. Dr. Sucharita Sen Maiti and Dr. Susmitha Wils K. are developing an innovative aptamer-based electrochemical biosensor for the rapid detection of colistin in food products, a project supported by the DST&apos;s Technology Development and Transfer (TDT) scheme . In a parallel effort, Dr. Avik Mukherjee and Dr. Santosh Kumar are working on a biopolymer-based smart packaging system designed to indicate milk freshness.",
                "Dr. Sandeep Kumar Srivastava&apos;s research delves into the fascinating properties of co-doped SnO2 compounds for Spintronics applications, funded by the UGC-DAE CSR . Meanwhile, Dr. B. N. Parida&apos;s study on the MI-shielding effectiveness of xGnP-filled blends has received support from BRNS. Another notable project led by Dr. S. Kumar and Dr. A. Mukherjee explores non-toxic nanoformulations to extend the shelf life of mandarin oranges,  DBT.",
                "Mr. Pranjal Barman&apos;s ongoing work on the utilization of fly ash for geotechnical applications, supported by DST, complements his earlier project on river bank filtration, from ASTEC. Dr. Gunajyoti Das&apos;s theoretical and experimental studies on amino acid sequences, backed by SERB-DST , and Dr. Sandeep Kumar Srivastava&apos;s research on bit-patterned media for hard disk drives, funded by DST-SERB , highlight the depth of research undertaken at CIT Kokrajhar.",
                "In addition, the Department of Food Engineering and Technology has secured a substantial multi-institutional research grant , involving collaborations with prestigious institutions such as IIT Guwahati, NIFTEM, NERIST, and the College of Horticulture and Forestry. The institute’s partnership with CSIR-IITR has also resulted in a significant research grant . The academic community at CIT Kokrajhar is further distinguished by its prolific output, with over 400 peer-reviewed publications accumulating 4800 citations in the past four years, and nearly 600 publications boasting more than 7000 citations overall. This vibrant research environment underscores CIT Kokrajhar&apos;s dedication to scholarly excellence and innovation.",
              ]}
            />
            <div className="flex justify-center mt-7 mb-14">
              <a
                href="https://cit.ac.in/researches"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                For more information click here
              </a>
            </div>
          </div>
        );

      case "Student Clubs":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "Central Institute of Technology, Kokrajhar (CITK) boasts a vibrant array of clubs, each contributing uniquely to the student experience and fostering diverse interests. The Google Developer Student Club (GDSC) CITK ignites innovation by empowering students through technology and entrepreneurship, creating a hub for learning and collaboration. The DevCom Club supports web and app development enthusiasts, offering a platform for all skill levels to grow through real-world projects and knowledge sharing. Meanwhile, the Cyber Security Club focuses on raising awareness and education about cybersecurity, organizing workshops and competitions to tackle critical issues like network security and ethical hacking. The Automation Club engages students in hands-on learning about robotics and automation technologies, sparking creativity through practical workshops and collaborative projects. The Robotics Club chronicles its journey of exploration and triumphs, driving interest in robotics. The Astrophysics Club captivates with its deep dives into the cosmos, hosting events like night sky gazing and national webinars on astrophysics. Xopun, the drama club, provides a creative outlet for students to explore their artistic talents through compelling performances and awareness programs. Lastly, SPIC MACAY KHOBAM celebrates India&apos;s rich cultural heritage through events and workshops that connect students with classical arts and traditions, such as the annual BWISAGU/Bihu celebration. Each club plays a crucial role in enriching campus life, fostering skills, and building a sense of community at CITK.",
              ]}
            />
            <div className="flex justify-center mt-7 mb-14">
              <a
                href="whycitk/Clubs Serega-new.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                Download CITK Clubs Info PDF
              </a>
            </div>
          </div>
        );

      case "Industrial Training":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "The Training and Placement (T&P) Cell of CIT Kokrajhar, comprising 5 faculty and 18 student members from various departments, plays a pivotal role in facilitating industrial training and job placements. For the 2nd and 3rd-year students, the T&P Cell arranged summer and winter training sessions across diverse industries and organizations, spanning both private and government sectors, in December 2023 and June 2024. The placement data for the 2024 graduating batch highlights a robust record, with students securing positions in prominent companies. Notable placements include roles at AMUL, Pie Infocomm, and Teachnook, among others, with various branches represented. The total number of students placed was 59, with 69 offers extended. The T&P Cell’s efforts are reflected in the placement statistics over the past three years, showing an increase from 49 placements in 2021-22 to 75 in 2022-23, and a slight dip to 59 in 2023-24, while maintaining a median salary of 4 LPA. The cell has facilitated recruitment from 19 companies this year, demonstrating its continued commitment to enhancing career opportunities for CITK students.",
              ]}
            />
            <div className="flex justify-center mt-7 mb-14">
              <a
                href="16. CITK_T&P_Annual Report.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                Download Industrial Training Report
              </a>
            </div>
          </div>
        );

      case "Infrastructure":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "Central Institute of Technology, Kokrajhar (CITK) boasts one of the most advanced infrastructures in the North East region, blending modernity with functionality to provide an exceptional learning environment. The campus features state-of-the-art facilities, including well-equipped laboratories, cutting-edge research centers, and spacious classrooms designed for interactive learning. Students benefit from high-speed internet access, extensive library resources, and specialized facilities for various disciplines, including engineering, technology, and sciences. The institute&apos;s amenities extend beyond academics, with comfortable hostels, recreational areas, and well-maintained sports facilities promoting a balanced and enriching student life. The infrastructure at CITK not only supports academic excellence but also fosters innovation, collaboration, and overall personal development.",
              ]}
            />
            <div className="flex justify-center mt-7 mb-14">
              <a
                href="https://www.cit.ac.in/institute-infrastructure"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                View More....
              </a>
            </div>
          </div>
        );

      case "Library":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "The Central Library at CIT Kokrajhar, spanning 22,000 square feet, is a cornerstone of the campus, offering a dynamic and supportive environment for learning and research. Equipped with over 111,000 physical books and more than 288,000 digital resources, including e-books, e-journals, and multimedia materials, it provides extensive academic support. The library is fully automated with RFID technology and SOUL 2.0 software, facilitating self-issue and return and ensuring security with dual anti-theft systems and CCTV surveillance. Its advanced services include Web OPAC for remote access, an Android app for easy library management, and a digital library with up-to-date facilities. The library also features a conference room, teacher study rooms, and a power backup system, ensuring continuous access to its resources. Innovative services like “Library on Demand” and a robust community outreach program further enhance its role in supporting academic excellence.",
              ]}
            />
            <div className="flex justify-center mt-7 mb-14">
              <a
                href="http://centrallibrary.cit.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                View More....
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const tabs = [
    "Academics",
    "Admission Criteria",
    "Faculty",
    "R&D Activities",
    "Student Clubs",
    "Industrial Training",
    "Infrastructure",
    "Library",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 text-blue-800">
          Why Recruit at CITK?
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-3 text-center">
          CIT Kokrajhar encourages its students to balance academics with
          co-curricular activities, fostering all-round development.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Students also showcase research in national conferences and workshops,
          often serving as Teaching Assistants to mentor juniors.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveComponent(tab)}
            className={`px-4 py-2 text-sm md:text-base rounded-full shadow-sm transition-all duration-200 ${
              activeComponent === tab
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-10 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
