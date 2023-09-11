import React from "react";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "68.4vh" }}>
        <Toaster /> {children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Placement Cell CITK Website",
  description: "Best Engineering College in Assam",
  keywords: "CITK,CIT Kokrajhar, Placements, Google, MicroSoft",
  author: "Devanshu Kumar",
};

export default Layout;
