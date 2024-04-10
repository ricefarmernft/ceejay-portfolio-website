import Header from "../components/header";
import Title from "../components/title";
import Content from "../components/content";
import TweetFormat from "../components/tweetFormat";
import List from "../components/list";
import ProjectImg from "../components/projectImg";
import SubTitle from "../components/subTitle";

export default function Chimkens() {
  return (
    <>
      {/* Header */}
      <Header
        title="Chimkens"
        website="https://www.chimkens.dog/"
        alt="Chimkens"
        src="/chimkens-media/chimkens-collage.jpeg"
      />
      <Content>
        <Title title="Inspiration" />
        <p>
          I was connected with{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/henlo_eth/"
            target="_blank"
            rel="noreferrer"
          >
            Henlo
          </a>{" "}
          via my first NFT project,{" "}
          <a
            className="portfolio-link"
            href="/portfolio/ohayo-labs"
            target="_blank"
            rel="noreferrer"
          >
            Ohayo Labs
          </a>
          . He is a supporter of both myself and my NFT project, as he minted
          Ohayo and was a huge fan of the anime inspired art.
        </p>
        <p className="pt-3">
          On Twitter, I saw some of his art previews of what would later become{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/chimkensnft/"
            target="_blank"
            rel="noreferrer"
          >
            Chimkens
          </a>
          . I was really impressed with the art and thought it was both unique,
          yet simple. He mentioned he used AI to help generate the art, as well
          as create his own manual edits. I decided to reach out to see if he
          was launching an NFT project and to see if there were any potential
          collaborations.
        </p>
        <p className="pt-3">
          As an architect and artist,{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/henlo_eth/"
            target="_blank"
            rel="noreferrer"
          >
            Henlo
          </a>{" "}
          was confident in creating the art but hesitant in the development of
          the smart contract and website. He had a certain vision for his
          project, but did not know exactly how to realize it. With some
          negotiation, we agreed that I would hop on board as the developer of{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/chimkensnft/"
            target="_blank"
            rel="noreferrer"
          >
            Chimkens
          </a>
          . As the dev, I would be responsible for the smart contract and
          website, while Henlo would be respoonsible for the art and marketing.
          It was a great opportunity for us both to work on a new project,
          utilizing each of our strengths to collaborate and create.
        </p>
        <ProjectImg
          alt="Chimkens Image 3"
          src="/chimkens-media/chimkens-image-3.jpeg"
        />
        <List
          languages={["Javascript", "Solidity", "HTML", "CSS"]}
          dependencies={[
            "Next.js",
            "Tailwind CSS",
            "Rainbow Kit",
            "Wagmi Hooks",
            "Hardhat",
            "MerkleTree.js",
            "Remix",
          ]}
          apis={["Alchemy API", "Etherscan API"]}
        />
        <Title title="Vision" />
        <ProjectImg
          alt="Chimkens Home"
          src="/chimkens-media/chimkens-home.jpg"
          href="https://www.ohayolabs.xyz/"
        />
        <p>
          As Henlo was the founder of the project, I let him take the lead on
          the vision. Of course, he did ask for my advice and I was happy to
          offer it, as I had experience launching an NFT project before while it
          would be his first.
        </p>
        <p className="pt-3">
          He was inspired by Ohayo Labs and took a lot of similar themes from my
          project into Chimkens. Chimkens would be an AI focused project, with a
          low supply of 999 and a low mint price. There would be no promised
          utility, just good art and good vibes. We would do our best to not
          over-allocate the whitelist and give true supporters a chance to mint.
          And of course, I would create a custom website and smart contract in
          order to add novel features and a personal touch.
        </p>
        <p className="pt-3">
          We also had lengthy discussions about which blockchain to launch
          Chimkens on. Ethereum NFTs were declining due to gas fees. Bitcoin
          ordinals on the other hand were rising, but it was quite expensive to
          inscribe Ordinals on Bitcoin. Meanwhile, Blast had just launched their
          layer 2. And Base was generating hype due to its low gas fees and ease
          of use.
        </p>
        <p className="pt-3">
          In the end, we decided to launch on Base. Being a low supply
          collection with a low price meant it would be extremely costly to
          launch Chimkens on ETH or BTC. And Base NFTs were starting to gain
          traction more so than Blast. In the end, it was an easy choice as we
          could ride the rising tide of Base NFTs while enjoying low gas for
          deployment and minters.
        </p>
        <ProjectImg
          alt="Chimkens Wallet"
          src="/chimkens-media/chimkens-wallet.jpg"
        />
        <p className="pt-3">
          The website would be a “good vibes” website with clean art and
          abstract buttons. It would have minting functionality via connecting
          your web 3 wallet. You could also view and confirm your whitelist
          spot. And we also added a FAQ to help answer common questions.
        </p>
        <ProjectImg alt="Chimkens FAQ" src="/chimkens-media/chimkens-faq.jpg" />
        <p className="pt-3">
          The smart contract would be be a simple ERC721 contract with a few
          extra features. There would be a whitelist mint separated by
          Chimkenlist and Ohayo list. I was able to negotiate 300 mint spots for
          the Ohayo community, and Henlo would create his own Chimkenlist for
          his supporters for the rest. Whitelist mint price would be .0069 ETH.
          There would also be a public sale for any remaining unminted NFTs,
          which would have a price of .0088 ETH.
        </p>
        <ProjectImg
          alt="Chimkens Mint"
          src="/chimkens-media/chimkens-mint.jpg"
        />
        <Title title="Post Launch" />
        <p>
          The Chimkens mint was a success as we sold out all 999 NFTs, raising
          7.5 ETH ($27k)!
        </p>
        <TweetFormat tweetId="1777537767028736034" />
        <p>
          The whitelist mint went very smoothly, as most supporters had ample
          time to mint their allocation. After the whitelist sale, there were
          about 250 NFTs left for the public sale. The public sale sold out in
          seconds which was both a good and bad thing.
        </p>
        <p className="pt-3">
          Good because there was a lot of demand for the sale. But bad because
          bots claimed most of the supply, and it was very difficult to mint if
          you were an average joe on the computer.
        </p>
        <ProjectImg
          alt="Chimkens Image 1"
          src="/chimkens-media/chimkens-image-1.jpeg"
        />
        <p className="pt-3">
          Unfortunately, there isn’t a great way to combat bots for a timed
          mint, as they will almost always be faster than the human hand when
          clicking buttons. And this is especially true for Base, where bots
          have negligible gas fees and can repeatedly spam the same function
          without material cost. But it did give me a few learning lessons to
          help reduce the amount of bots that can mint. Next time, I can
          over-allocate the whitelist to ensure most if not all of the supply is
          minted fairly, thereby eliminating the public sale entirely. I can
          also keep the timing, price, and amount able to mint a secret, so bots
          cannot pre-plan their minting strategy. On the same rationalization, I
          can announce an initial price and change it at the last second, so
          only those minting through the front-end will be successful. And
          lastly, I can wait to verify the contract publicly until after mint,
          so bots cannot screen the contract functions and use them nefariously.
        </p>
        <p className="pt-3">
          In the end, I learned some great lessons and had some really important
          takeaways after the completion of Chimkens:
        </p>
        <ul className="list-disc ml-4 ">
          <li className="pt-3">
            Working on a team was really exciting and helped reduce my
            responsibilities. Henlo was a great partner for this project as we
            balanced out our strengths and weaknesses. He was able to take the
            lead with the art and marketing, and I was able to stay in the
            background focusing on the programming and development. It worked
            out really well because marketing and art isn’t my strongest suit,
            and I was able to focus on programming and let Henlo take care of
            talking to supporters, organizing collabs, and creating the art
            metadata.
          </li>
          <li className="pt-3">
            Having already launched Ohayo previously, launching Chimkens was a
            lot easier as I could take my experience and prior work and rebrand
            a lot of it for Chimkens. I didn’t have to create the smart contract
            from scratch again, I could use the Ohayo contract as a base and
            update it accordingly. And although the website would look
            completely different, the Web 3 functions are usually the most time
            consuming part of building a mint website. Luckily, Ohayo was also a
            mint website so i could reuse a lot of the code to implement the
            same logic for Chimkens. Overall, the process was 2x-3x faster
            programming Chimkens compared to Ohayo.
          </li>
          <li className="pt-3">
            Launching on Base was also a new but fun experience. I wanted to
            gain more experience on other blockchains, so I was really happy we
            decided to launch Chimkens on Base rather than Ethereum. Having
            negligible gas fees meant I could be more loose with the smart
            contract and add more functions and checks without the extra cost of
            gas. The contract would be safer in a way because I wouldn’t have to
            worry about cost when deploying and interacting with the contract.
          </li>
          <li className="pt-3">
            I learned some new ways to keep supporters happy by reducing bots
            and keeping a well-maintained whitelist. Things like waiting to
            verify the contract, changing the contract shortly before mint, and
            hiding functionality on the front-end can help reduce the amount of
            bots that snipe the public sale.
          </li>
        </ul>
        <ProjectImg
          alt="Chimkens Image 2"
          src="/chimkens-media/chimkens-image-2.jpeg"
        />
        <p className="">
          Slowly but surely, I am becoming a more complete Web 3 Full Stack
          Developer. I’m confident developing my own smart contracts and
          deploying and interacting with them. I know how to incorporate Web 3
          functions within a website to make the experience seamless for the
          front-end user. And I’m more comfortable working on a team with
          different responsibilities, and developing that trust that each one of
          us is doing our jobs correctly with pride.
        </p>
        <p className="pt-3">
          I’m not exactly sure what’s next, but I definitely plan on developing
          new projects or joining existing teams as the bull run continues this
          year. There is so much more opportunity out there, so I’m sure I won’t
          be bored for too long!
        </p>
      </Content>
    </>
  );
}
