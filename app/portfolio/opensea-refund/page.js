import Header from "../../portfolio/components/header";
import Title from "../components/title";
import Content from "../components/content";
import TweetFormat from "../components/tweetFormat";
import List from "../components/list";
import ProjectImg from "../components/projectImg";

export default function OpenseaRefund() {
  return (
    <>
      {/* Header */}
      <Header
        title="Opensea Refund"
        website="https://www.osrefund.app/"
        github="https://github.com/ricefarmernft/opensea-reimbursement"
        src="/opensea-refund-media/os-refund-landing-page.png"
        alt="Opensea Refund Landing Page"
      />

      {/* Content */}
      <Content>
        <Title title="Inspiration" />
        <p>
          The inspiration for this project came from a viral Twitter post I saw
          from{" "}
          <a
            href="https://twitter.com/CryptoXpresso"
            className="portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            @CryptoXpresso
          </a>{" "}
          . I had never heard of Opensea offering refunds before so I was quite
          intrigued with the process. One thing I instantly noticed, however,
          was how many steps it took to accurately get the amount that Opensea
          owes you. It isn't easy for the average individual to read etherscan
          and export all of their failed Opensea transactions.
        </p>
        <TweetFormat tweetId="1591218382216404992" />
        <p>
          That weekend I started thinking: How can I make this process easier
          for the average individual? Speed was of the essence here as I wanted
          to capture as many users as I could while this post was viral. I had
          never worked with blockchain data before, but I figured this was a
          simple enough problem that it was the perfect time to start. So I got
          to work!
        </p>
        <List
          languages={["Javascript", "HTML", "CSS"]}
          dependencies={["React", "Ant Design", "Web3.js"]}
          apis={["Etherscan API", "Alchemy API"]}
        />
        <Title title="Styling" />
        <p>
          Initially, I kept the styling extremely simple due to time constraint
          and the practicality I wanted for the app. There would be an input for
          the Ethereum address to check, a balance checker, and a table to
          showcase all of your transactions. Also, I added a dark mode option.
        </p>
        <Title title="Vision" />
        <p>
          My vision for this project was to showcase all of the Ethereum
          transactions that failed an interaction with the Opensea contracts by
          simply inputting your Ethereum address. I wanted to display it in a
          simple table with the date, transaction hash, gas fee, and etherscan
          link. I also wanted to clearly display the total Opensea refund amount
          as well as an option to export the table to an Excel sheet.
        </p>
        <ProjectImg
          src="/opensea-refund-media/os-refund-example.png"
          alt="Opensea Refund"
          href="https://www.osrefund.app/"
        />
        <p>
          I had never worked with blockchain data before so my first step was to
          find an API that could filter the entire history of someones Ethereum
          address. This proved rather easy though since etherscan has a free API
          that you can use for personal projects. This would work perfectly!
        </p>
        <p className="pt-3">
          Setting up the Ethereum address input was easy enough. I created a
          state that would store the address that a user inputs. I wanted to
          test the etherscan API so I decided to have it display the addresses
          Ether balance to the right. This way, the user could confirm that they
          inputted their address in correctly.
        </p>
        <p className="pt-3">
          Then came the more technical part of the app: filtering the ethereum
          transactions. There were two basic criteria I needed to filter out the
          transactions by: failed transactions, and interactions with the
          Opensea contract. Filtering the JSON data by failed transactions was
          easy enough, but I remembered Opensea has gone through multiple
          contract upgrades in the past.
        </p>
        <p className="pt-3">
          I was able to find 4 contracts that were deployed by Opensea by
          looking at my personal past Opensea transactions, searching for
          Opensea contracts on etherscan, and using Twitter advanced search to
          find Tweets related to contract upgrades.
        </p>
        <TweetFormat tweetId="1497342530957955073" />
        <p>
          Once I was able to filter all of the necessary failed Opensea
          transaction, I simply needed to extract the gas amount and convert it
          to Ether. I could then find the total amount of gas, which is the
          amount that Opensea owes you back in reimbursement.
        </p>
        <p className="pt-3">
          Lastly, I wanted to add a simple Export to Excel button. I found a
          package that would make this a simple button click and I was done!
        </p>
        <Title title="Testimonials" />
        <p>
          The only thing left to do was to release it to world. I hoped it would
          help a few people who had not received their reimbursement yet or were
          unable to find their reimbursement amount. The response I got was
          extraordinary!
        </p>
        <TweetFormat tweetId="1594745256951562250" />
        <p>
          Over 800 likes, 200 retweets, and nearly 100 comments. I was genuinely
          surprised at the amount of positive responses I was receiving. Let me
          tell you, it is a great feeling creating something so useful. It
          reaffirmed my belief that users want something fast and simple, which
          was exactly what this app was. Here are some of my favorite responses
          and feedback:
        </p>
        <TweetFormat tweetId="1594855371642114048" />
        <TweetFormat tweetId="1595744289426149376" />
        <TweetFormat tweetId="1594831256209960960" />
        <TweetFormat tweetId="1595317819042050048" />

        <p>
          The feedback I received was nothing short of incredible. It felt
          amazing to help so many people and have them offer me encouraging
          words on my web development process. Who knew I could help so many
          people by building a simple tool over the weekend?
        </p>
        <p className="pt-3">
          In fact, my app was so popular it may have actually backfired. Shortly
          after launching the app, many users started reporting Opensea changing
          their policy to only allow reimbursement for transactions occuring in
          the last 30 days.
        </p>
        <TweetFormat tweetId="1594746072701747203" />
        <TweetFormat tweetId="1594763966626013185" />
        <p>
          Despite the new policy, this app is still useful for active NFT
          traders as they can receive their monthly reimbursement from Opensea.
          So I decided to leave the site up and to this day I still receive
          messages from grateful users using my app.
        </p>
        <p className="pt-3">
          Sometimes, you don't need to be an incredible coder to create a
          popular app. You just need to seize the moment 🙂
        </p>
        <Title title="Update (1/15/2023)" />
        <p>
          Over the weekend, I decided to revisit this project and add more
          functionality to it that I wasn't able to before due to both a time
          constraint and inability. I also wanted to completely revamp the
          styling and create a more aesthetically pleasing website and a better
          UI / UX for the user.
        </p>
        <p className="pt-3">Here is what I came up with:</p>
        <ProjectImg
          href="https://www.osrefund.app/"
          src="/opensea-refund-media/os-refund-final.png"
        />
        <p>
          I decided to scrap the light and dark theme and instead create a wavy
          background using the Haikei app. I thought this was appropriate as a
          nod to 'Opensea'. I revamped to an aqua and pink color theme and also
          reduced the font weights to create a more minimalistic look.
          Instructions were added to the top as well as direct links to the
          Opensea Help Center. For the transaction table, I removed the 'Link'
          column and instead added the etherscan links to the 'Tx Hash' data. I
          also made the table transparent and added a box shadow to make it pop
          out more.
        </p>
        <p className="pt-3">
          In terms of functionality, I added ENS support through web3.js to make
          it easier to get your refund amount instead of using your Ethereum
          address. I also added a 'Sort 30 Days' button to adhere to the new
          Opensea policy of only allowing refunds within 30 days. This would
          make it easier for frequent users to quickly check if they are
          eligible for any more refunds. I added a simple Loader that shows up
          when you input an Ethereum Address or a .eth ENS so you know that the
          table is generating. Lastly, I decided to remove the export to XLS
          button due to the fear of malware and increasing download scams.
          Instead, I replaced it with a 'Copy Table' button which will neatly
          copy your Table to the clipboard. From here, you can paste it in Excel
          or forward it to the Opensea Help Center. I figured this would be
          safer than downloading an actual file.
        </p>
        <p className="pt-3">
          Overall, I'm extremely pleased with the updates. The site looks a lot
          cleaner and simpler to use. Key functionality was added to improve the
          user experience. This is definitely an site that I am extremely proud
          of.
        </p>
        <p className="pt-3">
          An important takeaway from this update is that no project is truly
          complete. As you learn more and more, you should revisit your old
          projects and update them up to your new skill level. This was a fun
          weekend activity and I look forward to revisiting this project again
          to see what else I can add!
        </p>
        <Title title="Update (1/31/2023)" />
        <p>
          Unfortunately, Opensea has decided to shutdown the refund policy. I
          suspect it may be due to my application going viral, and Opensea
          struggling as a company. Although it pains me to see my time, effort,
          and innovation eventually becoming fruitless, I learned a lot about
          developing and marketing a useful application like Opensea Refund.
          Feel free to read the full synopsis below:
        </p>
        <TweetFormat tweetId="1620185618868482050" />
      </Content>
    </>
  );
}
