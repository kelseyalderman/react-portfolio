import React from "react";

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/kelseyalderman",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/kelsey-alderman-79019922b/",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/17915693/kelsey-alderman?tab=profile",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
