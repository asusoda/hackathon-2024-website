"use client";

import React, { useEffect } from "react";
import teamData from "./team";
import "../../styles/team.css";
import "../../styles/team/background.css";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Card from "./MemberTilt";

function TeamSection() {
  const [showTeam, setShowTeam] = useState("organizer");
  const [animate, setAnimate] = useState(false);

  const handleClick = (team: string) => {
    setAnimate(true);
    setShowTeam(team);
  };

  const teamButtons = [
    { team: "organizer", label: "Organizer" },
    { team: "web", label: "Web" },
    { team: "sponsorship", label: "Sponsorship" },
    { team: "management", label: "Management" },
    { team: "outreach", label: "Outreach" },
    { team: "design", label: "Design" },
  ];

  const teamMapping = {
    organizer: teamData.organizers,
    design: teamData.design_team,
    management: teamData.management_team,
    outreach: teamData.outreach_team,
    sponsorship: teamData.sponsorship_team,
    web: teamData.web_team,
  };

  return (
    <>
      <div className="mt-36 sm:mt-40 w-screen">
        <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo mt-40">
          Team
        </h1>

        <div className=" md:flex hidden justify-center mt-24">
          <Card
            member={{
              id: "Faculty coordinator, <br>Assistant Professor,<br> Department of Electronics and Communication,<br>Faculty of Technology,<br>DDU, Nadiad,<br> Gujarat, India",
              name: "Prof. Dipak Rabari",
              twitter: null,
              github: null,
              gradientColors: "bg-slate-200",
              image: "/team_members/dipak-sir.png",
            }}
          />
        </div>

        <div className=" md:hidden flex justify-center mt-24">
          <Card
            member={{
              id: "Faculty coordinator",
              name: "Prof. Dipak Rabari",
              twitter: null,
              github: null,
              gradientColors: "bg-slate-200",
              image: "/team_members/dipak-sir.png",
            }}
          />
        </div>

        <div className="sm:w-full sm:flex sm:items-center sm:justify-center mt-10">
          <div className="text-center container1 container2  teamContainer1 sm:text-lg text-sm navigation">
            {teamButtons.map((button) => (
              <button
                key={button.team}
                onClick={() => handleClick(button.team)}
                className={`m-1 ${
                  showTeam === button.team ? "rounded-xl active" : ""
                } px-2 py-1 rounded-md font-semibold`}
              >
                {button.label}
              </button>
            ))}
            <div className={`animation ${showTeam} bg-gradient-to-l  from-purple-500  to-pink-500`}/>
          </div>

          {/* <div className="text-center">
            <button onClick={() => handleClick("coordinator")} className="m-2">
              coordinator
            </button>
          </div> */}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={showTeam}
            className="flex flex-wrap justify-center items-center pt-20 gap-10 sm:px-20 lg:px-96"
            initial={{
              opacity: 0,
              x: 300,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
          >
             {showTeam === "organizer" ? (
              <>
                <div>
                  <Card member={teamData.organizers[0]} />
                </div>

                <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                  {teamData.organizers.map((member, index) =>
                    index == 0 ? null : (
                      <motion.div
                        key={`${member.key}`}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                      >
                        <Card member={member} />
                      </motion.div>
                    )
                  )}
                </div>
              </>
            ) : showTeam === "design" ? (
              <>
                {teamData.design_team.map((member, index) => (
                  <motion.div
                    key={`${member.key}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : showTeam === "management" ? (
              <>
                {teamData.management_team.map((member, index) => (
                  <motion.div
                    key={`${member.key}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : showTeam === "outreach" ? (
              <>
                {teamData.outreach_team.map((member, index) => (
                  <motion.div
                    key={`${member.key}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : showTeam === "sponsorship" ? (
              <>
                {teamData.sponsorship_team.map((member, index) => (
                  <motion.div
                    key={`${member.key}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
              </>
            ) : showTeam === "web" ? (
              <>
                {teamData.web_team.map((member, index) => (
                  <motion.div
                    key={`${member.key}`}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                  >
                    <Card member={member} />
                  </motion.div>
                ))}
                </>
            ) : null}

            </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default TeamSection;
