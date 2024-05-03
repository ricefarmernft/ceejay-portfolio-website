export default function About() {
  return (
    <>
      <div className="text-lg md:text-2xl p-4 md:p-8 " id="about">
        <p className="text-3xl md:text-6xl">About Me</p>
        <div className="pt-3 md:pt-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 ">
            <p>
              I am an experienced Software Engineer proficient in Next.js,
              Tailwind, JS, and Solidity. But my journey in tech extends beyond
              development—I'm also a seasoned marketer and an entrepreneur who
              has thrived in the fast-paced world of startups. I'm fascinated by
              the potential of Web 3 and AI, particularly in blockchain and
              machine learning, where I strive to push boundaries and innovate.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-6">
            <div>
              When I'm not programming, I enjoy poker, playing{" "}
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
                href="https://twitter.com/RiceFarmerNFT"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
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
