export default function About() {
  return (
    <>
      <div className="text-lg md:text-2xl p-4 md:p-8 " id="about">
        <p className="text-3xl md:text-6xl">About Me</p>
        <div className="pt-3 md:pt-6 flex flex-col md:flex-row gap-3">
          <div className="flex-1 ">
            <p>
              I'm not just another coder, I bring websites to life with Next.js,
              React, and Tailwind CSS. But that's not all. I've also taken the
              rollercoaster ride of entrepreneurship, navigating the high-octane
              startup world to breathe life into brilliant ideas. What really
              lights my fire, though? It's Web 3 and AI. I'm on a mission to
              shape the future by developing cutting-edge blockchain and machine
              learning applications.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3 md:gap-6">
            <div>
              When I'm not programming, I enjoy watching movies, playing{" "}
              <a
                className="crypto-link"
                href="https://www.youtube.com/channel/UCc7HfjGvO7KtBotlmcVoLIA"
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
