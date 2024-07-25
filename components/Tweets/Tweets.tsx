import Carousel from 'better-react-carousel';
import React, { useEffect, useMemo, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
// import {  Tweet  } from 'react-twitter-widgets';
import Tweet from 'react-tweet-embed';


interface TweetCarouselProps {
  tweetId: string[];
  setTweetId: React.Dispatch<React.SetStateAction<string[]>>;
}

function TweetCarousel({ tweetId, setTweetId }: TweetCarouselProps) {
  const [hide, setHide] = useState<string>('0');
  const [hideTweetPost, setHideTweetPost] = useState<boolean>(true);

  useEffect(() => {
    // Add the lazy loading in the tweet cards
  
  }, []);

  useMemo(() => {
    if (tweetId.includes(hide)) {
      setTweetId((prevIds) => prevIds.filter((str) => str !== hide));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hide]);

  return (
    <React.Fragment>
      {hideTweetPost ? (
        <div className='layout'>
          <Skeleton
            count={3}
            // wrapper={InlineWrapperWithMargin}
            inline
            width='30%'
            height='50vh'
            baseColor='#15202b'
            highlightColor='#6555cc'
            borderRadius='0.5rem'
          />
        </div>
      ) : null}
      {tweetId?.length !== 0 ? (
        <div
          className='w-full'
          style={{
            opacity: hideTweetPost ? '0' : '1',
          }}
        >
          <Carousel
            cols={3}
            rows={1}
            gap={10}
            autoplay={2500}
            dotColorActive='rgb(89,66,233)'
            arrowRight={
              <AiFillRightCircle
                size={50}
                className='absolute top-1/2 right-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-slate-500'
              />
            }
            arrowLeft={
              <AiFillLeftCircle
                size={50}
                className='absolute top-1/2 left-[-35px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black text-2xl text-slate-500'
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
              <Carousel.Item  key={id}>
                {/* normally width is set to 95% | for screens <= 640px width=90% | for screens <= 370px width=85% */}
                <div  className=' w-[95%] max-sm:w-[90%] max-xsm:w-[85%]'>
                  <Tweet tweetId={id}   />
                  
                  {/* <Tweet
                    tweetId={id}
                    options={{
                      theme: 'dark',
                      conversation: 'none',
                      align: 'center',
                    }}
                    onLoad={() => {
                      setHideTweetPost(false);
                    }}
                    renderError={() => {
                      setHide(id);
                      return <div style={{ display: 'none' }}></div>;
                    }}
                  /> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : null}
    </React.Fragment>
  );
}

interface TestimonialCardProps {
  src: string;
  description: string;
  from: string;
}

const TestimonialCard = ({ src, description, from }: TestimonialCardProps) => {
  return (
    <div className='mb-10 flex h-full w-full flex-col items-center justify-center rounded-lg border border-content/20 bg-gradient-to-br from-content/0 to-content/10 p-4 py-8 text-center lg:flex-1 '>
      <img
        alt='testimonial'
        className=' mb-2 inline-block h-20 w-20 rounded-full border-2 border-base-100 bg-base-100/10 object-cover object-center'
        src={src}
      />
      <p className='text-lg'>{description}</p>
      <hr className='styled-hr styled-hr--light mx-auto my-4' />
      <h2 className='text-sm font-medium text-content '>{from}</h2>
    </div>
  );
};

export default TweetCarousel;
