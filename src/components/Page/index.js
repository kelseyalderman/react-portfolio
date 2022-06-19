import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Contact from "../Contact";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}

export default Page;
