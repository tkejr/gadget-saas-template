import React from "react";
import logo from "../assets/website-logo.svg";

function Footer() {
  // you can change the footer links from here change the title and and please change "#" to your own url like if you website is "https://www.example.com" and you want to add "About" page which is in the "/about" routes then change the url to "/about".
  const footerLinksColumn1 = [
    {
      id: 1,
      title: "About",
      url: "#",
    },
    {
      id: 2,
      title: "Contact",
      url: "#",
    },
    {
      id: 3,
      title: "Blog",
      url: "#",
    },
    {
      id: 4,
      title: "Story",
      url: "#",
    },
    // You can add more links here
  ];

  const footerLinksColumn2 = [
    {
      id: 5,
      title: "Company",
      url: "#",
    },
    {
      id: 6,
      title: "Product",
      url: "#",
    },
    {
      id: 7,
      title: "Press",
      url: "#",
    },
    {
      id: 8,
      title: "More",
      url: "#",
    },
    // You can add more links here
  ];

  return (
    <section className="footer-main bg-white px-10 py-10">
      <div className="footer-headline mx-auto flex max-w-5xl flex-col gap-x-5 gap-y-5 md:flex-row md:items-start md:justify-between lg:px-10 xl:px-0">
        <div className="left-footer-part flex w-full flex-col items-start justify-start pt-3 md:w-1/2 lg:w-1/3">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img src={logo} alt="" />
              <h2 className="font-bold">Square</h2>
            </div>
          </button>
          <p className="mt-5 max-w-xs text-sm font-[400] text-black">
            What matters is productivity with fun culture
          </p>
        </div>

        <div className="center-footer-part w-1/2 pt-5 lg:w-1/3">
          <div className="flex items-center justify-between gap-x-3 px-0 lg:px-10">
            <ul className="footer-link-list flex flex-col gap-y-5 text-sm font-[400] text-black">
              {footerLinksColumn1.map((link) => (
                <li className="footer-link-item" key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
            <ul className="footer-link-list flex flex-col gap-y-5 text-sm font-[400] text-black/90">
              {footerLinksColumn2.map((link) => (
                <li className="footer-link-item" key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="right-footer-part w-full md:w-2/3 lg:w-1/3">
          <div className=" footer-social-container-dark  flex items-center justify-between p-5 border rounded-xl ">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm font-[400] text-black lg:text-base xl:text-lg">
                Follow us on twitter
              </p>
              <p className="-mt-2 text-xs font-[400] text-black/50">
                notion.com
              </p>
            </div>
            <div>
              <button className="footer-social-container-dark-button w-full rounded-lg border border-transparent bg-[#F2B53C] px-5 py-2 text-sm font-bold text-white transition duration-200 hover:shadow-lg hover:shadow-black hover:drop-shadow-lg">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
