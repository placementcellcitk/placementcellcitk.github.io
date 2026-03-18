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
                "Admissions to academic programs at Central Institute of Technology Kokrajhar (CIT Kokrajhar) are conducted through a multi-channel, merit-based admission system, with primary intake occurring through the institute’s own entrance examination (CIT Entrance Test). This entrance-based admission process serves as the main pathway for students seeking admission to Diploma, B.Tech, and several other undergraduate programs, ensuring uniform evaluation and accessibility for students across the North-Eastern region and beyond. In addition to the CIT entrance examination, a limited number of seats in B.Tech programs are filled through JEE (Main), while lateral entry schemes enable Diploma holders to join Undergraduate programs directly in higher semesters. B.Des admissions are conducted through design-aptitude-based evaluation and institute-level selection processes.",
                "For Postgraduate and research programs, the institute follows admission procedures aligned with national academic standards. M.Tech admissions are offered through GATE-qualified candidates as well as institute entrance and selection processes, while M.Des admissions follow discipline-specific evaluation methods. PhD admissions are conducted through a written entrance test and interview, with exemptions for candidates qualified in NET/GATE or equivalent national examinations as per institute norms. With a fully online admission portal, transparent eligibility criteria, and multiple entry pathways such as entrance examinations, lateral entry, and vertical mobility schemes, CIT Kokrajhar maintains an inclusive admission framework that attracts motivated students prepared for technology-driven education and professional careers."
              ]}
            />
            <div className="flex justify-center mt-10 mb-14">
              <a
                href="https://admission.cit.ac.in/"
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
              "Central Institute of Technology, Kokrajhar (CIT Kokrajhar) prides itself on a highly qualified and diverse faculty body comprising 86 regular faculty members out of a sanctioned strength of 106, including seasoned Professors, accomplished Associate Professors, and dedicated Assistant Professors who bring robust academic and industry aligned expertise to the classroom. The faculty team actively fosters a rigorous learning environment with strong emphasis on core fundamentals, applied problem-solving and research-driven teaching methodologies that prepare students for professional success and innovation in technology and design.",
              "CIT’s faculty members hold advanced degrees from premier institutions and are engaged in scholarly research, publications, patents, and editorial leadership in reputed journals, with some ranked among the top 2% of scientists globally a testament to their research impact and thought leadership. This academic excellence underpins CIT’s holistic pedagogy, with instructors mentoring students through industry projects, internships, national conferences, and collaborative learning that bridges theory and practice, ensuring our graduates are well equipped to excel in today’s dynamic technological landscape."
            ]}
          />
        );

      case "R&D Activities":
        return (
          <div>
            <CardTwo
              paragraphs={[
                "Central Institute of Technology Kokrajhar (CIT Kokrajhar) has demonstrated exceptional growth in research and development during 2024-25. Our institute boasts a vibrant faculty, with nearly 90% holding PhDs and the rest actively pursuing them. Since achieving Deemed-to-be-University status in December 2018, CIT Kokrajhar has awarded over 30 PhDs. With almost 150 PhD scholars currently enrolled and five PG programs (four under the De-novo category), we're rapidly expanding our knowledge creation endeavors.",
                "In 2024-25, our faculty's research output was impressive: nearly 200 peer-reviewed journal papers (garnering over 2000 citations), about 150 conference proceedings/presentations, and roughly 30 books/book chapters. We currently manage 17 ongoing sponsored projects valued at over Rs. 4 crores, plus a Rs. 2.87 crore 'Science Technology and Innovation Hub' incubation project, with many more on the horizon. These projects are predominantly funded by prominent government bodies like DST, AICTE, DAE, DBT, MeitY, CSIR, and BTC.",
                "CIT Kokrajhar also provides valuable consultancy services to various State Government Departments, Railways, NHAI, NEEPCO, NTPC, and the Infrastructure Sector. Our Civil Engineering Department alone completed consultancy work worth approximately Rs. 20 lakhs last year. Furthermore, 2024-25 saw an increase in collaborative R&D through new MoUs with national and international academic institutions and industries. CIT Kokrajhar is making significant progress, fulfilling the aspirations of the BTR region.",
              ]}
            />

            {/* R&D Images */}
            <h6 className="text-2xl font-bold text-center mt-10 mb-6 text-gray-800">
              Growth Chart of Publication and Funded Research Projects:
            </h6>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-10">
              <div className="flex justify-center">
                <img
                  src="/whycitk/R&D_Photos/pic1.png"
                  alt="R&D Activity at CIT Kokrajhar"
                  className="w-full max-w-xl h-72 object-contain rounded-xl shadow-md bg-white"
                />
              </div>

              <div className="flex justify-center">
                <img
                  src="/whycitk/R&D_Photos/pic2.png"
                  alt="Research Laboratory at CIT Kokrajhar"
                  className="w-full max-w-xl h-72 object-contain rounded-xl shadow-md bg-white"
                />
              </div>
            </div>


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
                <>
                  CIT Kokrajhar embeds mandatory industrial training as a credit linked component in all Degree and Diploma programs, ensuring that students acquire structured, hands-on exposure to real industrial ecosystems. The Training & Placement (T&P) Cell coordinates one-month training programs during Winter (December) and Summer (June) across core engineering, infrastructure, power, oil & gas, telecom, food processing and IT sectors.
                  <br /><br />

                  Students have undergone industrial training in leading public and private organizations such as NTPC, Indian Oil Corporation Limited (IOCL), Oil India Limited, Numaligarh Refinery Limited (NRL), Oil and Natural Gas Corporation (ONGC) (Sivasagar), Adani Airport Holdings Ltd. (Guwahati), BSNL, NF Railway, Public Health Engineering Department (PHED), Water Resources Department, Assam, Assam Electricity Grid Corporation Limited (AEGCL) (Guwahati), Assam Petrochemicals Limited (Namrup), Brahmaputra Valley Fertilizer Corporation Limited (BVFCL), NEEPCO (Shillong), NIELIT, APT Software Avenues Pvt. Ltd., Food Corporation of India (FCI) (Guwahati), Amul, East Khasi Hills District Cooperative Milk Union Ltd. (Shillong), Repose Foods Pvt. Ltd., Trinity Fructa Private Ltd., Mahananda Foods, Salt Range Foods Pvt. Ltd., and RT Industries (Hills Dew), among others.
                  <br /><br />

                  This structured exposure enables students to understand industrial workflow, plant operations, quality control systems, project management protocols, statutory compliance, automation practices and safety standards. Engineering students gain field level insights into power generation and transmission, refinery operations, petrochemicals, telecommunications, railways and public infrastructure. Students from Food Engineering and allied disciplines benefit from hands on experience in dairy technology, beverage processing, supply chain logistics and agro-based industries particularly relevant given Assam’s growing food processing ecosystem.
                  <br /><br />

                  The advantages of this mandatory training framework include:
                  <br /><br />

                  • Industry Readiness: Graduates enter the job market with prior exposure to industrial equipment, ERP systems, plant layout and operational troubleshooting.
                  <br /><br />

                  • Professional Competency Development: Students develop teamwork, reporting skills, industrial documentation practices and workplace ethics.
                  <br /><br />

                  • Stronger Institute Industry Linkages: Sustained collaborations enhance placement pipelines and facilitate internships, live projects and recruitment drives.
                  <br /><br />

                  • Improved Employability: Recruiters value CIT Kokrajhar students for their practical orientation and ability to contribute productively from the initial stages of employment.
                  <br /><br />

                  Through this well structured industrial immersion model, CIT Kokrajhar ensures that academic learning is consistently reinforced by real world application, producing technically competent, industry-aligned and deployment ready graduates.
                </>
              ]}

            />

            {/* ✅ Logo Section */}
            <div className="mt-10 px-8">
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  "logo (1).png",
                  "logo (2).png",
                  "logo (3).png",
                  "logo (4).png",
                  "logo (5).png",
                  "logo (6).png",
                  "logo (7).png",
                  "logo (8).png",
                  "logo (9).png",
                  "logo (10).png",
                  "logo (11).png",
                  "logo (12).png",
                  "logo (13).png",

                ].map((logo, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={`whycitk/company_logos/${logo}`}
                      alt="Company Logo"
                      className="h-15 md:h-14 object-contain  hover:grayscale-0 transition duration-300"
                    />
                  </div>
                ))}
              </div>
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
      {/* ✅ Infrastructure Images */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
  {Array.from({ length: 14 }, (_, i) => (
    <div
      key={i}
      className={`overflow-hidden rounded-xl shadow-md ${
        i % 5 === 0 ? "md:col-span-2 lg:col-span-2" : ""
        
      }`}
    >
      <img
        src={`/whycitk/infrastructure/pic (${i + 1}).png`}
        alt={`Infrastructure ${i + 1}`}
        className={`w-full object-cover hover:scale-105 transition duration-700 ${
          i % 5 === 0 ? "h-[220px]" : "h-[220px]"
        }`}
      />
    </div>
  ))}
</div>



            
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


            <div className="flex flex-col md:flex-row items-stretch gap-6 px-4 mt-6">

              <div className="flex-1">
                <CardTwo
                  paragraphs={[
                    "The Central Library at CIT Kokrajhar, spanning 22,000 square feet, is a cornerstone of the campus, offering a dynamic and supportive environment for learning and research. Equipped with over 111,000 physical books and more than 288,000 digital resources, including e-books, e-journals, and multimedia materials, it provides extensive academic support. The library is fully automated with RFID technology and SOUL 2.0 software, facilitating self-issue and return and ensuring security with dual anti-theft systems and CCTV surveillance. Its advanced services include Web OPAC for remote access, an Android app for easy library management, and a digital library with up-to-date facilities. The library also features a conference room, teacher study rooms, and a power backup system, ensuring continuous access to its resources. Innovative services like “Library on Demand” and a robust community outreach program further enhance its role in supporting academic excellence.",
                  ]}
                />
              </div>


              <img
                src="/whycitk/library_photos/pic4.jpg"   // ← your vertical image
                alt="Library Interior"
                className="w-full md:w-64 max-h-[400px] object-cover rounded-xl shadow-md  hover:scale-105 transition duration-300"

              />

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-4">
              {[
                "/whycitk/library_photos/pic1.jpg",
                "/whycitk/library_photos/pic2.jpg",
                "/whycitk/library_photos/pic3.jpg",
                "/whycitk/library_photos/pic5.jpg",
                "/whycitk/library_photos/pic6.jpg",
                "/whycitk/library_photos/pic7.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Library ${index + 1}`}
                  className="rounded-xl shadow-md hover:scale-105 transition duration-300"
                />
              ))}
            </div>

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
          Recruiting from Central Institute of Technology Kokrajhar (CITK) means engaging with a pool of highly skilled, industry-ready, and innovation-driven graduates who are trained through a balanced blend of academic rigor, practical exposure, and holistic development.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          CIT Kokrajhar has established itself as a center of excellence in technical and design education in the North-East, producing graduates who are not only academically strong but also adaptable, collaborative, and professionally competent.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 px-5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveComponent(tab)}
            className={`px-4 py-2 text-sm md:text-base rounded-full shadow-sm transition-all duration-200 ${activeComponent === tab
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
