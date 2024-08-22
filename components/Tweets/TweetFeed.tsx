"use client";

import React, { useState } from "react";
import { Tweet } from "react-tweet";
import "../../styles/tweet/background.css";
// TODO: enhancement on the tweet fetching by having some third party service automated python script !
import Testimonials from "./Testimonials";
const tweets = [
  "1758101984945787333",
  "1755039419785208178",
  "1750939521976242298",
  "1746049368187175099",
  "1630461232112373761",
  "1744742989434679709",
  "1630461238441574400",
  "1627202244813946880",
  "1627207799842439168",
  "1627201251908915202",
  "1627206094593601536",
];

const TweetFeed = () => {
  const [tweetId, setTweetId] = useState(tweets);
  return (
    <div className=" w-screen mt-36 sm:mt-56 ">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo ">
        Tweet Buzz
      </h1>
      <Testimonials
        as="div"
        tweetId={tweetId}
        setTweetId={setTweetId}
        title=""
        className="pt-0 mt-24 tweetContainer1"
      />
    </div>
  );
};

export default TweetFeed;
