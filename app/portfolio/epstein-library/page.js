import Header from "../components/header";
import Title from "../components/title";
import Content from "../components/content";
import Caption from "../components/caption";
import List from "../components/list";
import ProjectImg from "../components/projectImg";
import MobileImg from "../components/mobileImg";

export default function EpsteinLibrary() {
  return (
    <>
      {/* Header */}
      <Header
        title="Epstein Library"
        website="https://www.epsteinlibrary.org/"
        alt="Epstein Library"
        src="/epstein-library-media/epstein-library-home.png"
      />
      <Content>
        <Title title="Vision" />
        <p>
          When the USA Department of Justice released the Epstein files in late
          2025, I was immediately intrigued. I had followed the Epstein saga for
          years, and was fascinated with the dark world of Jeffrey Epstein, his
          connections, and the many mysteries surrounding his life and death.
        </p>
        <p className="pt-3">
          However, I was disappointed that the files were just a massive dump of
          unorganized PDFs that were nearly impossible to sift through. I wanted
          to create a more user friendly way to explore the files, and thus the
          Epstein Library was born.
        </p>
        <p className="pt-3">
          The Epstein Library is a web application that allows users to easily
          browse, search, and view the Epstein files in a more organized manner.
          Users can search by dataset, filter by file type, filter by most
          viewed, and view files in a clean and intuitive interface. The goal of
          the Epstein Library is to make the Epstein files more accessible to
          the public and to shed light on the dark world of Jeffrey Epstein.
        </p>
        <p className="pt-3">
          After sharing the initial version of the Epstein Library on Reddit, it
          quickly gained traction and went viral, reaching over 150,000 views
          and 500+ upvotes. In 2 weeks, the website reached 11,000+ unique
          visitors. The response has been overwhelmingly positive, with many
          users praising the ease of use and organization of the files.
        </p>
        <p className="pt-3">
          Check out the live website{" "}
          <a
            className="portfolio-link"
            href="https://www.epsteinlibrary.org/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <div className="pt-4">
          <ProjectImg
            alt="Epstein Library Reddit"
            src="/epstein-library-media/epstein-library-reddit.png"
          />
          <Caption>
            Initial Reddit post sharing Epstein Library, quickly going viral
            with 500+ upvotes and 150k+ views
          </Caption>
        </div>
        <div className="pt-4">
          <ProjectImg
            alt="Epstein Library Vercel"
            src="/epstein-library-media/epstein-library-vercel.png"
          />
          <Caption>
            Reached 11k+ unique visitors and 16k+ page views in 2 weeks after
            going viral on Reddit.
          </Caption>
        </div>
        <List
          languages={["Typescript", "HTML", "CSS", "PostgreSQL"]}
          dependencies={[
            "Next.js",
            "Typescript",
            "Tailwind CSS",
            "Supabase",
            "Cloudflare R2",
          ]}
          // apis={["Alchemy API", "Etherscan API"]}
        />
        <Title title="Features" />
        <ProjectImg
          alt="Epstein Library Home"
          src="/epstein-library-media/epstein-library-home.png"
          href="https://www.epsteinlibrary.org/"
        />
        <p className="pt-3">
          EpsteinLibrary.org is a visual first archive designed to make large,
          unstructured document releases easier to explore and understand.
        </p>
        <ul className="pt-3 list-disc pl-5 space-y-2">
          <li>Image-based browsing of released Epstein documents</li>
          <li>Fast, infinite scrolling gallery optimized for large datasets</li>
          <li>Search and filtering by dataset, file type, and popularity</li>
          <li>
            Ability to view random files and images or sort by
            ascending/descending file numbers
          </li>
          <li>Metadata-driven organization (DS numbers, EFTA numbers)</li>
          <li>View count tracking to surface the most accessed files</li>
          <li>
            Community tagging feature to add context and metadata for searchable
            images
          </li>
          <li>Mobile friendly viewing with swipe navigation</li>
          <li>Privacy first access with no account required</li>
          <li>
            Images are stored on Cloudflare R2 for fast, cost-efficient delivery
            at scale
          </li>
          <li>
            Metadata, view counts, and tags are managed in a PostgreSQL database
            via Supabase
          </li>
          <li>
            Optional donation links allow users to support hosting and
            infrastructure costs without restricting access
          </li>
        </ul>
        <div className="pt-4">
          <ProjectImg
            alt="Epstein Library Modal"
            src="/epstein-library-media/epstein-library-modal.png"
            href="https://www.epsteinlibrary.org/"
          />
          <Caption>
            Zoom in modal view for easy reading and navigation between files.
          </Caption>
        </div>
        <div className="pt-4">
          <ProjectImg
            alt="Epstein Library Tagging"
            src="/epstein-library-media/epstein-library-tagging.png"
            href="https://www.epsteinlibrary.org/"
          />
          <Caption>
            Community tagging feature to add context and metadata for searchable
            images.
          </Caption>
        </div>
        <div className="pt-4">
          <MobileImg
            alt="Epstein Library Mobile"
            src="/epstein-library-media/epstein-library-mobile.png"
            href="https://www.epsteinlibrary.org/"
          />
          <Caption>
            Mobile-friendly design with swipe navigation in modal view.
          </Caption>
        </div>
        <p className="pt-3">
          EpsteinLibrary.org started as a response to a frustrating user
          experience, but it has grown into an ongoing experiment in making
          large, uncomfortable datasets more accessible. The project continues
          to evolve based on community feedback, with a focus on performance,
          usability, and transparency. My goal is to keep improving the tooling
          around it while staying mindful of the responsibility that comes with
          presenting sensitive public records.
        </p>
      </Content>
    </>
  );
}
