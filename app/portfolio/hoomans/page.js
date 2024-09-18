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
        title="Hoomans"
        website="https://www.chimkens.dog/"
        alt="Hoomans"
      />
      <ProjectImg alt="Hoomans Base" src="/hoomans-media/hoomansBase.jpeg" />

      <Content>
        <Title title="Inspiration" />
        <p>
          <a
            className="portfolio-link"
            href="https://twitter.com/henlo_eth/"
            target="_blank"
            rel="noreferrer"
          >
            Henlo
          </a>{" "}
          approached me after the success of the{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/chimkensnft/"
            target="_blank"
            rel="noreferrer"
          >
            Chimkens NFT
          </a>{" "}
          project to brainstorm and collaborate on a new NFT project he
          envisioned called "Hoomans". It would be the human counterparts for
          the chimkens, or the chimkens human owners.
        </p>
        <p className="pt-3">
          It was an easy decision for me to hop on board. We had already
          established a succesful partnership with Chimkens and I thought this
          was a great opportunity to experiment a little bit more. The art
          previews looked really great as well.
        </p>
        <p className="pt-3">
          Again, I would act as the dev, responsible for the smart contract and
          website, as well an ensuring a smooth minting and trading experience.
          Henlo would be respoonsible for the art and marketing. Importantly, we
          wanted to find a way to integrate both{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/chimkensnft/"
            target="_blank"
            rel="noreferrer"
          >
            Chimkens
          </a>{" "}
          and{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/ohayolabs/"
            target="_blank"
            rel="noreferrer"
          >
            Ohayo
          </a>{" "}
          holders into the project. We believed in supporting the communities we
          had already built and wanted to include them on this journey.
        </p>
        <ProjectImg alt="Hoomans Mint" src="/hoomans-media/hoomansMint.png" />
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
          alt="Hoomans Home"
          src="/hoomans-media/hoomansWebsite.png"
          href="https://www.chimkens.dog/"
        />
        <p>
          As our second NFT project together, Henlo and I were on the same page
          for most things. I let him take the lead on the art and marketing,
          with me helping out on Twitter where I could. While I created the
          smart contract and updated the website with new art to promote
          Hoomans.
        </p>
        <p className="pt-3">
          The process was much smoother and quicker compared to working on
          Chimkens. We already had the website domain{" "}
          <a
            className="portfolio-link"
            href="https://chimkens.dog"
            target="_blank"
            rel="noreferrer"
          >
            chimkens.dog
          </a>{" "}
          as well as an ERC721 smart contract. We were also already familiar
          with the successful marketing techniques we used for our previous
          projects as well as the process of creating art and its corresponsing
          metadata.
        </p>
        <p className="pt-3">
          Base was only getting more and more popular as well due to its low gas
          fees and increasing activity.{" "}
          <a
            className="portfolio-link"
            href="https://x.com/jessepollak"
            target="_blank"
            rel="noreferrer"
          >
            Jesse Pollak
          </a>{" "}
          was also creating a lot of buzz around Base, being the core developer
          and marketer on Twitter. A lot of users appreciated his support as he
          shouted out Chimkens before and is even a holder himself! So we
          decided to stick with Base and continue developing in this ecosystem!
        </p>
        <p className="pt-3">
          We decided that 2000 NFTs was a nice number to shoot for, selling at
          .0042 ETH per. We also decided to airdrop 1 Hooman for every 2 Chimken
          that each wallet address owned. So if you own 2 Chimkens, you received
          1 free Hooman. If you own 9 Chimkens, you received 4 Hoomans.
        </p>
        <p className="pt-3">
          We decided there would be 3 mint phases. First, would be the whitelist
          phase. This would consist of holders of Chimkens and Ohayo NFTs,
          representing both of our previous projects. We wanted to ensure our
          core collector base was able to participate in Hoomans before anyone
          else. Each holder was eligible to mint 5 NFTs.
        </p>
        <p className="pt-3">
          Next would be the FCFS phase. This would also include each Chimken and
          Ohayo holder, as well as any new collectors that wanted to participate
          in the mint. Henlo managed the FCFS list, but it would be easy to get
          added to this list if you expressed interest in the project at any
          point before mint. Each wallet was eligible to mint 10 NFTs.
        </p>
        <p className="pt-3">
          Last would be the public mint. We learned a bit from the Chimkens NFT
          mint and decided that overallocating the Whitelist and FCFS list was a
          better method. We didn't want bots to mint the majority of NFTs during
          the public sale, which is why we increased the total mint count to 5
          for the Whitelist phase and 10 for the FCFS phase. The public mint
          would be open to anybody and had a limit of 10 NFTs.
        </p>
        <ProjectImg
          alt="Hoomans Checker"
          src="/hoomans-media/hoomansChecker.png"
        />
        <p className="pt-3">
          We also released a whitelist checker so users could plan before mint
          and know exactly when and how many Hoomans they were eligible to mint.
        </p>

        <Title title="Post Launch" />
        <p className="pt-3">
          One problem we were unsure about was when to actually launch the
          project. Something we learned is that timing is just as important and
          the actual product. You can have an amazing product, but if you launch
          at the wrong time then the world will not be ready for it. So even
          though we had nearly everything ready to go, including the art,
          website, and smart contract, we decided to simply hold off until the
          market conditions became more favorable.
        </p>
        <p className="pt-3">
          The thing is, crypto and NFTs work in cycles. For a few months, DeFi
          is hot. Then it's memecoins. Then its NFTs. Then it's Layer 1's. You
          don't want to be too early or too late.
        </p>
        <p className="pt-3">
          Luckily, we noticed NFTs finally starting to get more traction after
          the memecoin supercycle, and during the down period we had already
          prepared pretty much everything and were redy to go! In the end, it
          took us less than 12 hours to launch and sell out the Hoomans NFT
          collection, raising over 6.7 ETH ($15.5K)!
        </p>
        <TweetFormat tweetId="1832579672179462274" />
        <p className="pt-3">
          Overall, Hoomans is a huge success and a breath of fresh air in the
          NFT community! Many collectors were tired of the same low-effort
          derivatives and appreciated the new, original art of Hoomans. They
          were also pleased with the smooth minting process and custom website.
          The public launch itself was open for nearly 8 hours, so almost
          anybody had enough time to mint!
        </p>
        <ProjectImg
          alt="Hoomans Collage"
          src="/hoomans-media/hoomansCollage.jpeg"
        />
        <p className="pt-3">
          The reveal happened shortly after sell out and collectors were very
          happy with the reveal, rocketing the floor price from .005 ETH to .04
          ETH! A lot of users changed their Twitter profile picture to a Hooman
          and the exclusive groupchat quickly gained over 200 members.
        </p>
        <p className="pt-3">
          However, there were a few problems with the metadata. Because it was
          done manually by Henlo, there were some trait and grammatical errors.
          Like an NFT showing a Hoodie, but the art didn't actually have one. Or
          having traits spelled wrong. Luckily, I input a function that allowed
          us to update the metadata in case of any errors such as this, so it
          wasn't much of a problem!
        </p>
        <p className="pt-3">
          So what's next for Hoomans? Well, Henlo and I are on the same page of
          not overpromising anything. Hoomans should be treated as strictly art,
          and anything that comes after that should be a pleasant surprise. I
          have no doubt we will continue to work together and experiment more in
          crypto and NFTs if the opportunity arises. But for now, we're really
          happy with how all of our projects have done so far and intend to keep
          creating for this amazing community!
        </p>
      </Content>
    </>
  );
}
