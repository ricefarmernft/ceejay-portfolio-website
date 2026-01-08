export default function About() {
  return (
    <>
      <div className="text-lg md:text-2xl p-4 md:p-8 " id="about">
        <p className="text-3xl md:text-6xl">About Me</p>
        <div className="pt-3 md:pt-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 ">
            <p>
              I am an experienced Software Engineer who enjoys spotting emerging
              trends early and building tools around them. I work primarily with
              Next.js, Tailwind, and JavaScript/TypeScript, and I also have
              experience with Solidity and blockchain systems. My background
              goes beyond engineering, as I've worked as a marketer and
              entrepreneur in fast-paced startup environments. I'm especially
              interested in Web3 and AI, where I experiment at the intersection
              of data, UI, and distribution.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-6">
            <div>
              When I'm not programming, I enjoy traveling, playing{" "}
              <a
                className="crypto-link"
                href="https://www.instagram.com/thevolleyballtraveler/"
                target="_blank"
                rel="noreferrer"
              >
                volleyball
              </a>{" "}
              at the beach, and sharing my thoughts and creations on{" "}
              <a
                className="crypto-link"
                href="https://X.com/RiceFarmerNFT"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              .
            </div>
            <div>
              If you're interested in my work, please feel free to check out my{" "}
              <a className="crypto-link" href="#portfolio" rel="noreferrer">
                portfolio
              </a>{" "}
              and{" "}
              <a
                className="crypto-link"
                href="mailto:ceejayxiong@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                contact
              </a>{" "}
              me for your development needs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
