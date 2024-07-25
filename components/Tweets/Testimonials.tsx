import React, { useEffect, useMemo, useState } from "react";
import Carousel from "better-react-carousel";
import clsx from "../../utils/utils";
import { ArrowLink, ButtonLink } from "./links/index";
import { Tweet } from "react-twitter-widgets";
import Skeleton from "react-loading-skeleton";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

interface InlineWrapperWithMarginProps {
  children: React.ReactNode;
}

function InlineWrapperWithMargin({ children }: InlineWrapperWithMarginProps) {
  return <span className="mx-3">{children}</span>;
}

interface TestimonialsProps {
  title?: string;
  tweetId?: string[];
  as?: React.ElementType;
  className?: string;
  setTweetId?: React.Dispatch<React.SetStateAction<string[]>>;
  content?: { from: string }[];
  btnText?: string;
  btnLink?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title = "Testimonials",
  tweetId,
  as: Component = "section",
  className,
  setTweetId,
  content,
  btnText,
  btnLink,
}) => {
  return (
    <Component id="testimonials">
      <div
        className={clsx(
          "layout flex flex-col items-center justify-center gap-6 py-20",
          className
        )}
      >
        <h2 className="h1">{title}</h2>
        <hr className="styled-hr" />

        {tweetId ? (
          <TweetCarousael tweetId={tweetId} setTweetId={setTweetId} />
        ) : (
          <div className="flex flex-col gap-4">
            <Carousel
              cols={3}
              rows={1}
              gap={20}
              autoplay={2500}
              dotColorActive="#f0abfc"
              arrowRight={
                <IoArrowForwardOutline
                  size={50}
                  className="absolute hidden top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-fuchsia-800 text-2xl text-slate-500"
                />
              }
              arrowLeft={
                <IoArrowBackOutline
                  size={50}
                  className="absolute hidden top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-fuchsia-800 text-2xl text-slate-500"
                />
              }
              showDots
              loop
            />
          </div>
        )}
        <div className="mt-4 flex gap-2">
          {btnLink && (
            <ArrowLink
              className={"nothing"}
              openNewTab
              as={ButtonLink}
              href={btnLink}
            >
              {btnText}
            </ArrowLink>
          )}
        </div>
      </div>
    </Component>
  );
};

interface TweetCarousaelProps {
  tweetId: string[];
  setTweetId: React.Dispatch<React.SetStateAction<string[]>> | undefined;
}

const TweetCarousael: React.FC<TweetCarousaelProps> = ({
  tweetId,
  setTweetId,
}) => {
  const [hide, setHide] = useState<string>("0");
  const [hideTweetPost, setHideTweetPost] = useState<boolean>(true);

  useEffect(() => {
    // Add the lazy loading in the tweet cards
    // eagerLoadTwitterLibrary();
  }, []);

  useMemo(() => {
    if (tweetId.includes(hide)) {
      if (setTweetId)
        setTweetId((prevTweetId) => prevTweetId.filter((str) => str !== hide));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hide]);

  return (
    <>
      {hideTweetPost ? (
        <div className="layout">
          <Skeleton
            count={3}
            // wrapper={InlineWrapperWithMargin}
            inline
            width="30%"
            height="50vh"
            baseColor="#15202b"
            highlightColor="#6555cc"
            borderRadius="0.5rem"
          />
        </div>
      ) : null}
      {tweetId?.length !== 0 ? (
        <div
          className="w-full"
          style={{
            opacity: hideTweetPost ? "0" : "1",
          }}
        >
          <Carousel
            cols={3}
            rows={1}
            gap={10}
            autoplay={1500}
            dotColorActive="#f0abfc"
            arrowRight={
              <IoArrowForwardOutline
                size={50}
                className="absolute hidden top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-fuchsia-800 text-2xl text-slate-500"
              />
            }
            arrowLeft={
              <IoArrowBackOutline
                size={50}
                className="absolute hidden top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-fuchsia-800 text-2xl text-slate-500"
              />
            }
            showDots
            loop
            responsiveLayout={[
              {
                breakpoint: 1380,
                cols: 2,
                gap: 5,
              },
              {
                breakpoint: 640,
                cols: 1,
                gap: 10,
              },
            ]}
          >
            {tweetId?.map((id) => (
              <Carousel.Item key={id}>
                <div className="w-[95%] max-sm:w-[90%] max-xsm:w-[85%]">
                  {/* Adjust the Tweet component import based on your library */}
                  <Tweet
                    tweetId={id}
                    options={{
                      theme: "dark",
                      conversation: "none",
                      align: "center",
                    }}
                    onLoad={() => {
                      setHideTweetPost(false);
                    }}
                    renderError={() => {
                      setHide(id);
                      return <div style={{ display: "none" }} />;
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};

interface TestimonialCardProps {
  src: string;
  description: string;
  from: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  from,
  src,
  description,
}) => {
  return (
    <div className="mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1">
      <img
        alt="testimonial"
        className=" mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center"
        src={src}
      />
      <p className="text-lg">{description}</p>
      {from && <p className="text-base font-semibold mt-2">{from}</p>}
      <hr className="styled-hr styled-hr--light mx-auto my-4" />
    </div>
  );
};

export default Testimonials;
