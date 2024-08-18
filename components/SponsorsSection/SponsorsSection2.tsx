import React, { createFactory } from "react";
import "./sponsorTilt.css";
import "../../styles/sponsors/background.css";

type Sponsor = {
  src: string;
  alt: string;
  link?: string;
  imageDimension?: string;
  scale?: string;
  class?: string;
};

type SponsorsGroup = {
  event?: Sponsor[];
  gold?: Sponsor[];
  silver?: Sponsor[];
  bronze?: Sponsor[];
  platinum?: Sponsor[];
};

type CategorySize = {
  imgSize: string;
  scale?: string;
};

export default function SponsorsSection2() {
  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };
  const sponsors: SponsorsGroup = {
    //emerald: [{ src: "/sponsors_logos/Devfolio_Logo-White.svg", alt: "LOGO" }],
    event:[
       {
         src : "/sponsors_logos/celsius.svg",
         alt: "CELSIUS LOGO",
         link: "https://www.celsius.com",
         class: "scale-[0.7] md:scale-[0.6]",
       },
       {
        src : "/sponsors_logos/mlh.svg",
        alt: "MLH LOGO",
        link: "https://mlh.io",
        class: "scale-[0.7] md:scale-[0.6]",
      },
      {
        src : "/sponsors_logos/es.png",
        alt: "ETHICAL SPECTACLE LOGO",
        link: "https://ethicalspectacle.org",
        class: "scale-[0.7] md:scale-[0.5]",
      }
    ],
    platinum: [    
      {
      src: "/sponsors_logos/Amazon.svg",
      alt: "AMAZON LOGO",
      link: "https://amazon.com",
      class: "scale-[0.6] md:scale-[0.6]",
    },
  ],
    gold: [
      {
        src: "/sponsors_logos/statefarmm.png",
        alt: "STATEFARM LOGO",
        link: "https://www.statefarm.com",
        class: "scale-[0.4] md:scale-[0.4]",
      },
    ],
    /*silver: [],*/ // Use this commented section if there is a category for silver sponsors
    /*bronze: [],*/ // Use this commented section if there is a category for bronze sponsors
  };

  const categorySizes: { [key: string]: CategorySize } = {
    event: { imgSize: "h-[130px] w-[300px]  md:px-8 px-4 py-1 md:h-[200px] md:w-[600px] " },

    emerald: { imgSize: "w-48 h-16 sm:h-full sm:w-full" },
    diamond: { imgSize: "w-48 h-16 sm:h-full sm:w-full" },
    platinum: {
      imgSize: "h-[120px] w-[250px] px-2 py-1 md:h-[160px] md:w-[500px]",
    },
    gold: {
      imgSize: "h-[80px] w-[250px] px-2 py-1 md:h-[140px] md:w-[420px]",
    },
    silver: {
      imgSize: "h-[60px] w-[200px] px-2 py-1 md:h-[120px] md:w-[300px]",
    },
    bronze: {
      imgSize: "h-[60px] w-[200px] px-2 py-1 md:h-[120px] md:w-[300px]",
    },
  };

  return (
    <div className="mt-36 sm:mt-56">
      <h1 className="my-10 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo sponsorContainer1">
        Sponsors
      </h1>

      {Object.entries(sponsors).map(([category, sponsorList]) => (
        <div key={category} className={`${category}SponsorContainer`}>
            <h2 className={`text-center m-auto md:my-20 my-10 text-white text-lg md:text-xl xl:text-2xl md:w-1/6 w-1/2 font-semibold px-1 py-2 title-${category.toLowerCase()} rounded-md`}>
  {category === "event" ? "Partners" : category.charAt(0).toUpperCase() + category.slice(1) + " Sponsors"} </h2>

          <div className="flex flex-wrap justify-center md:px-20">
            {sponsorList.map((sponsor, index) => (
              <a href={sponsor.link ? sponsor.link : ""} target="_blank">
                <div
                  key={index}
                  className={`m-4 glassy-div bg-cover bg-center flex items-center justify-center no-repeat rounded-2xl md:p-5 p-1 hover-effect-${category} ${
                    sponsor.link ? "cursor-pointer" : "cursor-default"
                  } ${categorySizes[category]?.imgSize}`}
                  onClick={
                    sponsor.link
                      ? () => {
                          handleClick(sponsor.link!);
                        }
                      : () => {}
                  }
                >
                  <img
                    alt=""
                    src={`${sponsor.src}`}
                    className={`
                ${sponsor.class ? sponsor.class : "h-full w-full "}`}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
