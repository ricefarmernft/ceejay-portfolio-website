import { data } from "../data/portfolioData";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="text-lg md:text-2xl p-4 md:p-8 " id="portfolio">
      <p className="text-3xl md:text-6xl">Portfolio</p>
      <div className="pt-3 md:pt-6 flex flex-col gap-3 md:gap-6 items-center justify-between">
        {data.map((project, index) => (
          <div key={index} className="portfolio">
            <p className="text-2xl md:text-4xl font-bold">{project.title}</p>
            <div className="flex flex-col md:flex-row gap-6 pt-4">
              <div className="flex-1 portfolio-item-text self-center">
                <p className="text-lg md:text-2xl ">{project.description}</p>
              </div>
              <div
                className={`flex-1 self-center ${
                  project.id % 2 === 0 ? "md:order-last" : "order-first"
                }`}
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  <Image
                    className="portfolio-image-hover w-72 md:size-full"
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={800}
                  />
                </a>
              </div>
            </div>
            <div
              className={`pt-2 md:pt-4 flex ${
                project.id % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end justify-start"
              }`}
            >
              <a
                className="text-base md:text-xl text-blue-600 dark:text-teal-500 underline ease-in-out duration-500 hover:text-blue-500 dark:hover:text-teal-300 "
                href={`${project.link}`}
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
