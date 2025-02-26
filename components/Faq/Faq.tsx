"use client";
import { useState } from "react";
import { Container } from "./Container";
import "../../styles/faq/background.css";

const CodeChallengeFaq = [
  {
    question: <>Who can participate?</>,
    answer: (
      <>
        The competition is open to all actively-enrolled ASU students (undergrad and grad) 
        with at least 1 credit hour. This is an individual competition - teams of 3 are allowed.
      </>
    ),
  },
  {
    question: <>What programming languages can I use?</>,
    answer: (
      <>
        You may use any language supported by HackerRank's platform. Bonus categories 
        available for esoteric and legacy language implementations.
      </>
    ),
  },
  {
    question: <>Are there any participation fees?</>,
    answer: (
      <>
        No registration fees - completely free to participate. Just bring your ASU ID 
        and coding skills!
      </>
    ),
  },
  {
    question: <>What resources are allowed during competition?</>,
    answer: (
      <>
        Limited internet access permitted for reference documentation only. Strictly 
        prohibited: AI code generation, pre-written code, and external communication.
      </>
    ),
  },
  {
    question: <>How are submissions judged?</>,
    answer: (
      <>
        Solutions evaluated on:<br />
        • Test case success rate (primary)<br />
        • Memory/time efficiency<br />
        • Last submission timestamp for ties
      </>
    ),
  },
  {
    question: <>What's the competition format?</>,
    answer: (
      <>
        3-hour in-person event with proctored environment. Problems increase in 
        difficulty with points awarded per completed challenge.
      </>
    ),
  },
  {
    question: <>What prizes are available?</>,
    answer: (
      <>
        Separate undergraduate/graduate pools with:<br /> 
        • Nintendo Switch/Meta Quest/Beats headphones<br />
        • Special categories for lowerclassmen and unique language use<br />
        • Gift cards for various winners
      </>
    ),
  },
  {
    question: <>What are the prohibited actions?</>,
    answer: (
      <>
        Strictly forbidden:<br />
        • Collaboration or external help<br />
        • Plagiarism/pre-written code<br />
        • AI-generated solutions<br />
        • Multiple accounts usage
      </>
    ),
  },
  {
    question: <>What time does it start?</>,
    answer: (
      <>
        Saturday, March 1 from 11:00 AM to 6:00 PM. Registration closes at start time - 
        arrive early for check-in.
      </>
    ),
  },
  {
    question: <>What should I bring?</>,
    answer: (
      <>
        • ASU ID<br />
        • Laptop with power cord<br />
        • No external monitors permitted
      </>
    ),
  },
  {
    question: <>Have more questions?</>,
    answer: <>Contact us at asu@thesoda.io or ask in our <a className="text-blue-400 underline" href="https://discord.gg/the-software-developers-association-762811961238618122" target="_blank">Discord</a></>,
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
                Competition Guidelines
              </h2>
            </div>
            <div className="faqContainer1 relative"></div>
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
      {CodeChallengeFaq.map((item, i) => (
        <div
          key={String(i)}
          className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          <div
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
            onClick={() => handleToggle(i)}
          >
            <span className="font-medium text-white dark:text-white">
              {item.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
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
