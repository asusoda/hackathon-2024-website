// "use client";
import { RiGithubLine, RiTwitterXLine } from "react-icons/ri";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
function Card({ member }: any) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative sm:w-64 w-40 overflow-hidden rounded-2xl "
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl sm:p-8 p-4 glassy-div ">
        <div className="flex items-center justify-center">
          {" "}
          <Image
            className="sm:w-40 h-full rounded-2xl"
            src={member.image}
            width={100}
            height={100}
            objectFit="cover"
            alt="member image"
          />
        </div>

        <div className="flex flex-col items-center">
          <h4 className="sm:text-xl w-28 sm:w-auto flex items-center justify-center font-semibold text-zinc-900 dark:text-white">
            <span className="sm:text-lg text-sm text-center">
              {member.name}
            </span>
          </h4>
          <p className="mt-1 text-zinc-600 text-center dark:text-zinc-400 sm:text-md text-sm">
            <span dangerouslySetInnerHTML={{ __html: member.id }} />
          </p>
          <div className="text-sm flex gap-2 mt-3">
            {member.twitter && (
              <a
                href={`https://twitter.com/${member.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine />
              </a>
            )}
            {member.github && (
              <a
                href={`https://github.com/${member.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubLine />
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
