import Image from "next/image";

export default function Header(props) {
  return (
    <>
      <div className=" text-center" id="opensea-refund">
        <p className="text-3xl md:text-6xl ">{props.title}</p>
      </div>
      <div className="project-logos gap-2 md:gap-4 text-lg md:text-2xl p-1 md:p-2">
        {props.website && (
          <a
            href={props.website}
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition ease-in-out duration-500"
          >
            Website
          </a>
        )}
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition ease-in-out duration-500"
          >
            Github
          </a>
        )}
        {props.twitter && (
          <a
            href={props.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition ease-in-out duration-500"
          >
            Twitter
          </a>
        )}
      </div>
      {props.src && (
        <div className="flex justify-center pt-4">
          <Image
            className="w-10/12 shadow-lg"
            src={props.src}
            alt={props.alt}
            width={1000}
            height={1000}
            unoptimized
          ></Image>
        </div>
      )}
    </>
  );
}
