import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import "../../styles/prizesection.css";

const LastCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const texts = [
    "Wolfram | One for 30 days to all participants",
    "$25 credits on subscribing to team plan on beeceptor for 30 days to all participants.",
    "<a class='underline' href='https://www.echo3d.com/pricing'>Pro Tier</a> subscription from Echo3d to ease 3d development process to all participants",
  ];
  return (
    <>
      <div className={"median flex flex-col items-center justify-between"}>
        {!isFlipped && (
          <div>
            <Tilt
              tiltMaxAngleX={1}
              tiltMaxAngleY={0.5}
              glareEnable
              tiltAngleYInitial={0}
              glareMaxOpacity={0.1}
              className="card card-front h-auto flex flex-col sm:flex-row w-[200px] md:w-[1000px] sm:h-[320px] md:h-[480px] xl:h-[420px] fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b p-px m-4 glassy-div"
            >
              <div
                className={"circle bg-opacity-10 basis-1/3 flex items-center justify-center"}
              >
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
                  alt="Party Popper"
                  className="w-[130px] mt-5 sm:w-[300px] sm:mt-0"
                />
              </div>
              <div className="content w-full flex-grow flex flex-col justify-center">
                <div className="px-2 pt-5">
                  {texts.map((text: any, index: number) => (
                    <li
                      key={index}
                      className="text-white text-xs md:text-lg mb-1 text-left mx-2 my-2"
                    >
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </li>
                  ))}
                </div>
                <button
                  onClick={handleFlip}
                  className="sm:mt-auto mb-5 px-5 py-2 rounded-full bg-black mt-5 text-xs sm:text-base sm:w-20 ml-auto mr-5"
                >
                  More
                </button>
              </div>
            </Tilt>
          </div>
        )}
        {isFlipped && (
          <div>
            <Tilt
              tiltMaxAngleX={1}
              tiltMaxAngleY={0.5}
              glareEnable
              tiltAngleYInitial={0}
              glareMaxOpacity={0.1}
              className="card card-front h-auto flex flex-col sm:flex-row-reverse w-[200px] md:w-[1000px] sm:h-[320px] md:h-[480px] xl:h-[420px] fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b p-px m-4 glassy-div"
            >
              <div
                className={"circle bg-opacity-10 basis-1/3 flex items-center justify-center"}
              >
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Party%20Popper.png"
                  alt="Party Popper"
                  className="w-[130px] mt-5 sm:w-[300px] sm:mt-0 scale-x-[-1]"
                />
              </div>
              <div className="content w-full flex-grow flex flex-col justify-center">
                <div className="px-5 pt-5">
                  {texts.map((text: any, index: number) => (
                    <li
                      key={index}
                      className="text-white text-xs md:text-lg mb-1 text-left mx-2 my-2"
                    >
                      {/* rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                      <span dangerouslySetInnerHTML={{ __html: text }} />
                    </li>
                  ))}
                </div>
                <button
                  onClick={handleFlip}
                  className="sm:mt-auto mb-5 px-5 py-2 rounded-full bg-black mt-5 text-xs sm:text-base sm:w-28 mr-auto ml-5"
                >
                  Go Back
                </button>
              </div>
            </Tilt>
          </div>
        )}
      </div>
    </>
  );
};

export default LastCard;
