import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import Portfolio from "../Portfolio";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
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
