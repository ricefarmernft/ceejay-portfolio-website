import Header from "../components/header";
import Title from "../components/title";
import Content from "../components/content";
import TweetFormat from "../components/tweetFormat";
import List from "../components/list";
import ProjectImg from "../components/projectImg";
import SubTitle from "../components/subTitle";

export default function OhayoLabs() {
  return (
    <>
      {/* Header */}
      <Header
        title="Ohayo Labs"
        website="https://www.ohayolabs.xyz/"
        alt="Ohayo Labs"
        src="/ohayo-media/ohayo-collage-1.png"
      />
      <Content>
        <Title title="Inspiration" />
        <p>
          NFTs were a concept that came quite easily to me. Being a crypto
          native, I was already quite comfortable with blockchain technology and
          storing wealth cryptographically. I also consider myself a collector.
          I collected Pokemon and baseball cards growing up as well as graffiti
          stickers and sneakers. Sneakers especially made me aware of Veblen
          goods, and I had a knack for obtaining and reselling highly sought
          after sneakers during my high school years.
        </p>
        <p className="pt-3">
          So naturally, I was fascinated with NFTs from the very beginning, with
          NBA Topshot, Zed Run, and Bored Ape Yacht Club in early 2021. It
          brought all the collectible aspects online, and reduced the friction
          from collecting physical goods. I knew the technology was unique, so I
          started participating in the NFT space on Twitter and Discord. I ended
          up collecting, flipping, and investing in various NFT projects and
          eventually made a name for myself, accumulating over 25k followers on{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/ricefarmernft/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </p>
        <p className="pt-3">
          In July 2023, I decided to embark on a more personal NFT journey and
          launch my own NFT collection. But I wanted to do it the right way. I
          had seen too many scammers, false promises, and negligence the past
          couple of years. So I knew exactly what not to do, and I could be
          honest with myself on what I could promise my NFT collectors and why I
          wanted to launch Ohayo.
        </p>
        <List
          languages={["Javascript", "Solidity", "HTML", "CSS"]}
          dependencies={[
            "Next.js",
            "Tailwind CSS",
            "Rainbow Kit",
            "Wagmi Hooks",
            "Hardhat",
            "MerkleTree.js",
            "Arweave",
            "Remix",
          ]}
          apis={["Alchemy API", "Etherscan API"]}
        />
        <Title title="Vision" />
        <ProjectImg
          alt="Ohayo Home"
          src="/ohayo-media/ohayo-home.png"
          href="https://www.ohayolabs.xyz/"
        />
        <p>
          Ohayo started with humble beginnings. AI Art was taking off and I had
          free time to experiment with my own prompts and dataset images. I
          began sharing Anime characters that I created on Twitter every day,
          and many people enjoyed the aesthetic of them.
        </p>
        <p className="pt-3">
          Eventually, I realized I had enough support to launch my own NFT
          collection, something that has always been on the back of my mind. It
          would be quite an ambitious task, as I considered myself a Solidity
          novice. However, I was confident in my Front-End programming skills as
          well as the art I was creating, so I figured I may as well learn
          solidity to complete the trifecta.
        </p>
        {/* <p className="pt-3">
          On July 17th, 2023, I announced I was officially launching Ohayo Labs!
        </p> */}
        <SubTitle title="1. Improve my programming skills and learn solidity" />
        <p>
          As a programmer, I am always looking to level up my skills and stay up
          to date with new developments. I figured creating an NFT project would
          help improve my front end skills and be a great introduction to
          solidity and smart contract development.
        </p>
        <p className="pt-3">
          On the front-end side, I decided to use Next.js and Tailwind to create
          my website. The website would include a home page, FAQ, art page
          (everydays), and a mint page. I also needed to connect web 2 to web 3.
          I decided to use Wagmi Hooks and Rainbow Kit to connect web 3 wallets
          to my website. This was imperative for users to be able to check their
          whitelist status and mint NFTs.
        </p>
        <p className="pt-3">
          Now on to solidity. This would be my first time creating a smart
          contract, and it was important for me to understand every piece of
          code I wrote and make sure everything functions properly. Since
          Ethereum is an immutable ledger, any single error could have grave
          consequences. During my time writing the contract, I kept the failure
          of the{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/0xInuarashi/status/1517674505975394304"
            target="_blank"
            rel="noreferrer"
          >
            Akutars
          </a>{" "}
          mint in the back of my mind, where they accidentally butchered the
          smart contract logic which locked over $20+ Million in ETH in their
          smart contract.
        </p>
        <ProjectImg alt="Ohayo Mint" src="/ohayo-media/ohayo-mint.png" />
        <p>
          It was important for me to write the smart contract from scratch so I
          could really understand all the intricacies of smart contract
          development. I read plenty of solidity documents, watched multiple
          YouTube walkthroughs, and asked ChatGPT to explain the more difficult
          concepts in order for me to confidently write the Ohayo smart
          contract. Once I was done, I reached out to a few smart contract
          auditors to review my code and make sure everything looked good.
        </p>
        <p className="pt-3">
          I can confidently say I know how Solidity works now and am comfortable
          connecting web 3 and web 2 together!
        </p>
        <SubTitle title="2. Create aesthetic anime art that I would use as a PFP" />
        <p>
          Being asian myself, I have a deep affinity for anime art. Up to this
          point, Azuki was the only true anime NFT project, and they were going
          for over $10,000 already. The other anime collections seemed lazy and
          boring, and none of them really spoke to me.
        </p>
        <p className="pt-3">
          I don’t necessarily consider myself an artist. I have experience
          creating street art and have photoshop skills, but am a terrible
          drawer. However, with the release of AI art platforms I started
          experimenting with art prompting and editing. Slowly but surely, I
          noticed I was getting better and better at generating anime art, and
          more specifically, in the NFT style.
        </p>
        <ProjectImg
          alt="Ohayo Everydays"
          src="/ohayo-media/ohayo-everydays.png"
          href="https://www.ohayolabs.xyz/everydays"
        />
        <p>
          I decided to combine some rough sketches and AI algorithms that I
          created to help generate Ohayo NFTs. I promised I would only release
          an NFT project if it looked good enough that I would change my profile
          picture, and it seemed like I was on the right track. Upon sharing it
          with others, I noticed a lot of Twitter influencers were in support of
          my endeavor and resonated with the art as well:
        </p>
        <TweetFormat tweetId="1685993685756813312" />
        <TweetFormat tweetId="1685459906122616832" />
        <p>
          This was enough proof that I was onto something, and I decided to
          pursue this project further
        </p>
        <TweetFormat tweetId="1680958022120624128" />
        <SubTitle title="3. Keep it simple and build an NFT art project" />
        <p>
          I know my limits. I don’t know anything about game development. I’m
          not the best programmer in the world. I’m not an economics nerd that
          can create ponzinomic liquidity pools and farming platforms. I don’t
          have any special connections with celebrities or major publishers.
        </p>
        <p className="pt-3">
          NFT projects are often run by inexperienced plebs who have no idea
          what they’re doing. They promise you the world, and end up building
          nothing.
        </p>
        <p className="pt-3">
          As the sole founder of Ohayo, a normal mid-twenties guy with humble
          beginnings from the midwest USA, there isn’t much I can promise. There
          is no game. I don’t have connections to make a manga or anime. This is
          not the next Bored Ape Yacht Club.
        </p>
        <p className="pt-3">
          This is an art NFT project. A low supply, low mint collection whose
          sole purpose is to be used as a beautiful, aesthetic PFP on Twitter.
          Nothing more, nothing less.
        </p>
        <p className="pt-3">
          I’m a builder at heart. I intend to be in the Crypto and NFT space my
          whole life. So owning an Ohayo may have certain benefits down the
          line. But probably not. Don’t buy on speculation.
        </p>
        <ProjectImg alt="Ohayo Labs" src="/ohayo-media/ohayo-collage-2.png" />
        <SubTitle title="4. Make my mark on NFT history" />
        <p>
          I truly believe NFTs are a revolutionary technology and that we are at
          the beginning of a special asset class. Being so involved with NFTs
          already, I have been cautious to not associate myself with any project
          that I felt was not genuine. I passed on multiple opportunities to
          help work with or launch NFT projects throughout the past few years.
        </p>
        <p className="pt-3">
          Eventually, I realized I couldn’t really trust anyone online. If I
          attached myself to a bad actor, I would be under scrutiny too, and it
          was nearly impossible to separate the good actors from the bad. I knew
          that if I wanted to build something, I would have to take
          responsibility and do it my way, the right way.
        </p>
        <p className="pt-3">
          I’m proud that I did this entire process alone. I made all of the art.
          I coded the smart contract from scratch and built the entire website.
          I used my connections on Twitter to market the project and build a
          core community. People think this is easy. It isn’t. I learned a lot
          of new skills and more importantly I learned a lot about myself.
        </p>
        <p className="pt-3">
          When we look back at NFT history, I want my name to be there as one of
          the early adopters, who did things the right way and was proud of what
          he built.
        </p>
        <Title title="Post Launch" />
        <TweetFormat tweetId="1759934066630230512" />
        <p>
          I’m proud to say that Ohayo sold out! 600 NFTs were minted raising
          over 21 ETH ($60k+) at the time of mint. Our contract was deployed
          without a problem or bots attacking it. And our Twitter gained over 7k
          followers!
        </p>
        <p className="pt-3">
          The reveal went smoothly, as the metadata was correct and we were able
          to permanently store the NFTs on Arweave. The community was extremely
          happy with the output and I made plenty of new friends who became huge
          fans of the Ohayo art. A lot of new PFPs where changed to Ohayo,
          including yours truly!
        </p>
        <TweetFormat tweetId="1760388998730756112" />
        <p className="pt-3">
          Overall, I am extremely happy with Ohayo and the hard work I put in to
          complete a successful mint. Being the programmer, artist, and marketer
          helped me realize that I was truly skilled and could be relied upon
          for many things. It helped broaden my skillset and now I can say that
          I know what it takes to build and launch a successful NFT project.
        </p>
        <p className="pt-3">
          Ohayo has really given me a lot of confidence to pursue even more
          projects in the crypto space. I truly look forward to building more
          and bringing the Ohayo community along for the ride. I have also
          created an exclusive Twitter groupchat where I will share future
          projects and builds and where the community can meet and connect with
          each other. Feel free to DM me on{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/ricefarmernft/"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          to join!
        </p>
        <p className="pt-3">
          Exactly what is next, I can’t say. But I intend to experiment with new
          blockchains and protocols and network with like minded individuals to
          brainstorm new ideas that we can implement into the crypto community.
          I truly am incredibly thankful and grateful for everybody who has
          supported me on this journey, whether it be directly or from afar. You
          all give me the motivation to keep going and to be a better version of
          myself everyday!
        </p>
        <TweetFormat tweetId="1759957093812261164" />
        <p className="pt-3">{"Ohayo, forever <3"}</p>
      </Content>
    </>
  );
}
