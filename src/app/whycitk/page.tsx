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
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Student Clubs at CIT Kokrajhar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* VLSI Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/vlsilogo.png" alt="VLSI Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">VLSI Club</h3>
          <p className="text-gray-600 text-sm">
            The VLSI Club is aimed at spreading awareness and foundational knowledge about VLSI technology among college students. Through workshops, seminars, hands-on sessions, and guest lectures, the club introduces students to the principles and tools used in chip design and fabrication. By bridging the gap between academic curriculum and real-world applications, the club cultivates interest in semiconductor technology and prepares students for careers in hardware design.
          </p>
        </div>

        {/* Coding Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/codingclub.png" alt="Coding Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Coding Club</h3>
          <p className="text-gray-600 text-sm">
            Being the coding club of a technical institution, we do everything related to coding — events, workshops, query sessions, and contests, to name a few. We believe coding, like poetry, should be short and concise. Spreading knowledge and growing a culture of competitive coding is at the root of this club’s existence. We provide a mutual helping platform for students and guide them on their programming journey.
          </p>
        </div>

        {/* Google Developer Groups on Campus */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/gdglogo.png" alt="Google Developer Groups on Campus" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Google Developer Groups on Campus CIT Kokrajhar
          </h3>
          <p className="text-gray-600 text-sm">
            Google Developer Groups on Campus CIT Kokrajhar is a student community chapter under Google’s global GDG program, aimed at exploring and building with modern technologies. It connects learners with the latest in Google technologies and beyond through workshops, hackathons, study jams, and speaker sessions. By being part of the global GDG network, students gain hands-on experience, industry exposure, and the opportunity to build impactful projects while connecting with developers worldwide.
          </p>
        </div>

        {/* Design Circle Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/dcirclelogo.png" alt="Design Circle Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Design Circle Club</h3>
          <p className="text-gray-600 text-sm">
            Design Circle Club is a creative community dedicated to exploring and promoting various aspects of design. It brings together individuals who share a passion for design and offers a platform for collaboration, learning, and inspiration. Members engage in workshops, design challenges, and discussions to enhance their design skills across disciplines like graphic, UX, and product design.
          </p>
        </div>

        {/* Cyber X Secure Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/Cybersecurelogo.png" alt="Cyber X Secure Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cyber X Secure Club</h3>
          <p className="text-gray-600 text-sm">
            Cyber X Secure Club, established in 2021 at CIT Kokrajhar, is a community of passionate students dedicated to exploring various domains within cybersecurity through learning, innovation, and hands-on practice. The club provides a platform to gain skills, share knowledge, and tackle real-world challenges in digital security.
          </p>
        </div>

        {/* The Montage Society Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/MonatageSociety.jpg" alt="The Montage Society Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">The Montage Society Club</h3>
          <p className="text-gray-600 text-sm">
            The Montage Society Club of CIT Kokrajhar is a vibrant student-driven initiative celebrating cinema and visual arts. Dedicated to the love of films, it unites passionate students to explore filmmaking, editing, cinematography, and storytelling. Through screenings, workshops, and collaborations, the club nurtures creativity and provides a platform to transform cinematic vision into reality.
          </p>
        </div>

        {/* AI Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/aiclub.jpg" alt="AI Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Club</h3>
          <p className="text-gray-600 text-sm">
            AI Club, CITK, is a community of AI enthusiasts, researchers, and professionals dedicated to advancing artificial intelligence and making it accessible to everyone. Guided by values of diversity, inclusivity, and collaboration, the club organizes events, workshops, and seminars to foster knowledge sharing and ethical AI development.
          </p>
        </div>

        {/* Astrophysics Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/astrophy.jpeg" alt="Astrophysics Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Astrophysics Club</h3>
          <p className="text-gray-600 text-sm">
            The Astrophysics Club at CITK offers a welcoming space for anyone captivated by the universe and its profound secrets. Whether you’re a seasoned stargazer or just beginning your cosmic journey, this club lets you explore stars, galaxies, and cosmology through discussions, projects, and stargazing events.
          </p>
        </div>

        {/* Model United Nations Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/mun.jpg" alt="Model United Nations Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Model United Nations Club (MUN)</h3>
          <p className="text-gray-600 text-sm">
            The Model United Nations Club (MUN) of CIT Kokrajhar simulates the workings of the United Nations with realism and procedure. It provides a platform for students to discuss geopolitical issues, develop leadership, diplomacy, and decision-making skills, and foster awareness of international affairs.
          </p>
        </div>

        {/* Governance and Public Policy Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/gov.jpeg" alt="Governance and Public Policy Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Governance and Public Policy Club (GPPC)</h3>
          <p className="text-gray-600 text-sm">
            The Governance and Public Policy Club (GPPC) of CIT Kokrajhar is a student-driven initiative that provides a platform to explore governance, public policy, and socio-political issues. The club fosters awareness, dialogue, and civic responsibility through discussions, seminars, and collaborative projects.
          </p>
        </div>

        {/* Entrepreneurship Development Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/ecelllogo.png" alt="Entrepreneurship Development Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Entrepreneurship Development Club</h3>
          <p className="text-gray-600 text-sm">
            The Entrepreneurship Development Club of CIT Kokrajhar is a vibrant initiative fostering entrepreneurship and innovation. It inspires and empowers budding entrepreneurs through workshops, seminars, and mentorship. With its motto “Empowering Visionaries, Shaping Tomorrow,” the club helps students turn bold ideas into sustainable ventures.
          </p>
        </div>

        {/* CITK Developers Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/devcomlogo.png" alt="CITK Developers Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">CITK Developers Club</h3>
          <p className="text-gray-600 text-sm">
            The CITK Developers Club focuses on web and app development among interested students. It organizes events, competitions, seminars, and industry talks that encourage learning and innovation in software development.
          </p>
        </div>

        {/* Game Design and Development Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/game.jpeg" alt="Game Design and Development Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Game Design and Development Club (GDDC)</h3>
          <p className="text-gray-600 text-sm">
            The Game Design and Development Club (GDDC) of CIT Kokrajhar is a creative platform for students exploring game design and technology. It encourages innovation through hands-on projects in digital and tabletop game development, helping students build skills in storytelling, programming, and teamwork.
          </p>
        </div>

        {/* Saogari Photography Club */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img src="whycitk/clubphotos/sagori.jpg" alt="Saogari Photography Club" className="h-20 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Saogari Photography Club</h3>
          <p className="text-gray-600 text-sm">
            Saogari Photography Club is a creative platform for students passionate about capturing the world through their lenses. It inspires observation, nurtures creativity, and encourages storytelling through photography. With photo walks, workshops, contests, and exhibitions, it celebrates art in every frame.
          </p>
        </div>
      </div>

      {/* PDF Link */}
      <div className="flex justify-center mt-12">
        <a
          href="whycitk/Clubs Serega-new.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg text-sm bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
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
