import React, { useEffect } from "react";
import Layout from "./Layout";

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Facilities CITK">
      <div className="procedure-outer">
        <div className="procedure-wrapper">
          <h1>Facilities</h1>
          <p>
            The campus of CIT Kokrajhar is situated at the heart of Kokrajhar
            city providing fast connectivity to railway and airport. The nearest
            railway station is kokrajhar, which is at a distance of 10 km from
            the campus and the nearest airport is Rupsi Airport, which is approx
            75 km from the campus.
          </p>
          <p>The facilities provided for the placement process includes:</p>
          <ul className="custom-list">
            <li>Fully furnished AC rooms</li>
            <li>Conference rooms with audio visual setups</li>
            <li>Well-equipped Computer Labs</li>
            <li>
              Round the clock assistance by the students' volunteers at each
              level of placement process.
            </li>
            <li>
              Highly motivated and experienced staff to coordinate the whole
              process.
            </li>
          </ul>
          <p>
            The placement office ensures its best hospitality to the recruiters.
            Accommodation and conveyance can be arranged by the institute on
            prior notification.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Facilities;
