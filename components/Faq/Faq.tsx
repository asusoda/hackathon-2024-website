"use client";
import { useState } from "react";
import { Container } from "./Container";
import "../../styles/faq/background.css";

const HacksFaq = [
  {
    question: <>Who can participate? </>,
    answer: (
      <>
        HackSODA 24 is open to a diverse range of participants, including
        students, professionals, and individuals with varying skill levels.
        Whether you are a beginner or an experienced developer, despite the
        field of academic discipline chosen, you are eligible to join us! 🚀
      </>
    ),
  },
  {
    question: <>What if this is my first hackathon? </>,
    answer: (
      <>
        Congratulations on considering your first hackathon! HackSODA 24 is a
        great opportunity for beginners. We would be having expert sessions,
        guidance by mentors along the way to help you out in executing your
        ideas into projects. See you in the hackathon! 🤖
      </>
    ),
  },
  {
    question: (
      <>
        Do I need to pay a registration fee to participate in the hackathon? 
      </>
    ),
    answer: (
      <>
        No. There is no registration fee for participating in the hackathon. This approach ensures that creativity and innovation can flourish without restrictions, allowing participants to immerse themselves in a collaborative and dynamic environment.🌐✨
      </>
    ),
  },
  {
    question: (
      <>
        For the participants, will travel reimbursement be provided? 
      </>
    ),
    answer: (
      <>
        No, HackSODA 24 does not offer travel reimbursement for participants. Participants are responsible for their travel expenses, and we recommend planning accordingly.
      </>
    ),
  },
  {
    question: (
      <>
        Will everyone from ASU be eligible for participation, or is there a selection process? 
      </>
    ),
    answer: (
      <>
        TBD. Eligible individuals will be notified in advance.😊
      </>
    ),
  },
  {
    question: <>What should be the team size? </>,
    answer: (
      <>
        The team size can range from a minimum of 1 participant to a maximum of
        4 participants. 🤝
      </>
    ),
  },
  {
    question: <>Are team members from other colleges allowed? </>,
    answer: (
      <>
        Yes, HackSODA 24 welcomes participants from diverse backgrounds,
        including those from different colleges. The hackathon encourages
        collaboration and networking among individuals with varied experiences
        and expertise. 🌍
      </>
    ),
  },
  {
    question: <>What will I get after attending HackSODA 24? </>,
    answer: (
      <>
        HackSODA 24 offers a dynamic platform for learning and collaboration.
        Engage in workshops, network with industry professionals, and develop
        hands-on projects. Gain exposure to cutting-edge technologies, enhance
        problem-solving skills, and compete for prizes. Elevate your resume,
        build lasting connections, and join a vibrant community of innovators in
        this national-level hackathon. 🚀
      </>
    ),
  },
  {
    question: <> What if I do not have a team? </>,
    answer: (
      <>
        We have a great community on Discord. Reach out to other
        innovators, collaborate, communicate, and make things possible! 🤝
      </>
    ),
  },
  {
    question: <>Have more questions? </>,
    answer: <>Feel free to write to us at asu@thesoda.io or create a ticket🎫 on <a className="text-blue-400 underline" href="https://discord.gg/the-software-developers-association-762811961238618122" target="_blank">discord</a>
    </>,
  },
];

export default function FAQ() {
  return (
    <div className="mt-16 sm:mt-16" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row p-10 ">
          <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left  flex flex-col">
            <div className="my-8 text-white text-xl sm:text-2xl md:text-4xl">
              <h2 className="text-2xl font-bold text-white dark:text-white md:text-3xl lg:text-4xl font-logo">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="faqContainer1 relative">
              {/* <div className="flex justify-center"> */}

              {/* </div> */}
            </div>
          </div>
          <div className="lg:w-7/12 ">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {HacksFaq.map((item, i) => (
        <div
          key={String(i)}
          className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
<div
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
            onClick={() => handleToggle(i)}
          >
            <span className="font-medium text-white dark:text-white">
              {item.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
<svg
                className={`arrow-down h-6 w-6 transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {openIndex === i && (
            <div
              className={`pr-12 duration-300 ease-in-out ${
                openIndex === i ? "" : "hidden"
              }`}
            >
              <p className="pb-6 text-base text-white dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
