import Header from "../components/header";
import Title from "../components/title";
import Content from "../components/content";
import TweetFormat from "../components/tweetFormat";
import List from "../components/list";
import ProjectImg from "../components/projectImg";
import SubTitle from "../components/subTitle";

export default function Openask() {
  return (
    <>
      {/* Header */}
      <Header
        title="Openask"
        website="https://www.openask.me/"
        alt="OpenAsk V3 Landing Page"
        src="/openask-media/openask-v3.jpg"
      />
      <Content>
        <Title title="Inspiration" />
        <p>
          I was pitched the idea to create OpenAsk by a friend on Twitter who
          connected me with his startup. They were looking for a frontend
          developer to help code a platform where users could ask questions to
          their favorite influencers, founders, and creatives and have them
          answered in an audio or text format. We would focus on Web 3 and
          Crypto creatives and integrate crypto payments on the platform. I was
          excited to work with a full team on my first commercialized product
          and thought this was an amazing opportunity to level up my skills!
        </p>
        <p className="pt-3">
          It didn't take much convincing for me to get excited and agree to work
          on OpenAsk. As a prominent Twitter user with a decent sized following
          myself, I instantly saw the value that a platform like OpenAsk would
          bring to me. I get multiple DMs a week from people asking me about my
          thoughts on the market, how I learned to code, and what new
          investments I was interested in. But unfortunately, I just don't have
          enough time to thoughtfully respond to everyone.
        </p>
        <p className="pt-3">
          OpenAsk takes this burden away by offering a financial incentive for
          someone like me to answer and connect with the person asking me a
          question. It acts as a spam filter and deters bots and scammers from
          contacting me. When someone attempts to connect with me on OpenAsk, it
          is a signal that they are serious about connecting and are willing to
          pay for my time.
        </p>
        <p className="pt-3">
          With Ethereum Denver coming up, we decided this was the perfect
          oppurtunity to showcase this project at the hackathon.
        </p>
        <List
          languages={["Javascript", "Solidity", "HTML", "CSS"]}
          dependencies={[
            "React",
            "React Redux Toolkit",
            "MUI Library",
            "Ethers.js",
            "Web3Auth",
            "Axios",
            "Firebase",
            "Stripe",
          ]}
        />
        <Title title="Version 1" />
        <ProjectImg alt="OpenAsk V1 Feed" src="/openask-media/openask-v1.png" />
        <p>
          V1 of Open Ask was meant to be a barebones, working structure of the
          website. We wanted to focus on the core functionality and make sure
          that we could get a working product out the door. We decided to use
          React as our frontend framework and Firebase as our backend. We also
          decided to use the MUI library for our UI components. I was tasked
          with creating the frontend components and integrating them with the
          backend.
        </p>
        <p className="pt-3">
          We require users to sign up for an account before they can browse the
          website. However, as getting a user to sign up is one of the hardest
          parts of building a product, we decided to streamline the login
          experience by simpling requiring users to connect their Twitter
          account instead. This way, we could return their username, handle,
          profile picture, and other information to automatically create a
          profile for them.
        </p>
        <p className="pt-3">
          The Feed tab would be the first page that users would see when
          navigating to the website. This would be a standard social media feed
          where you could view popular and recent questions that were asked to a
          'Sensei' (Our version of a professional).
        </p>
        <p className="pt-3">
          The Sensei tab would contain all of our vetted influencers and
          creators. Sensei's are onboarded onto the platform as experts and are
          tasked with answering questions that are asked to them.
        </p>
        <ProjectImg
          alt="OpenAsk V1 Sensei"
          src="/openask-media/openask-v1-sensei.png"
        />
        <p>
          Within the Sensei tab would be a dedicated Sensei Profile page for
          each sensei. This would contain basic information such as Twitter
          followers, questions asked and answered, biography, etc.
        </p>
        <ProjectImg
          alt="OpenAsk V1 Sensei Profile"
          src="/openask-media/openask-v1-sensei-details.png"
        />
        <p>
          The Questions Asked tab would contain all of the questions that the
          user has asked as well as the status of the question. The question
          status could be completed, waiting, and expired. Questions are labeled
          as expired if they are not answered within 48 hours and the money is
          transferred back to the users account.
        </p>
        <p className=" pt-3">
          The Questions Answered tab would contain all of the questions that the
          user has answered, or has yet to answer. For now, we only supported
          text answers.
        </p>
        <p className=" pt-3">
          Asking and answering questions would be very similar. In each case,
          you would be provided with an empty text box where you could either
          submit a question to a particular Sensei or answer a question that was
          asked to you.
        </p>
        <ProjectImg
          alt="OpenAsk V1 Ask"
          src="/openask-media/openask-v1-ask.png"
        />
        <p>
          The Transaction History tab would contain all of the transactions that
          the user has completed, whether it be asking questions or answering
          them.
        </p>
        <p className="pt-3">
          Lastly, we included a wallet connection button to allow users to
          connect their wallet. This would allow them to withdraw and deposit
          crypto onto the platform to start claiming bounties and asking
          questions.
        </p>
        {/* Version 2 */}
        <Title title="Version 2" />
        <ProjectImg
          alt="OpenAsk V2 Home"
          src="/openask-media/openask-v2-home.png"
        />
        <p>
          Version 1 of OpenAsk was a great start, but we wanted to take it to
          the next level in terms of creating a better UI/UX and implementing
          blockchain technology.
        </p>
        <p className="pt-3">
          We arrived to ETH Denver with Version 1 of OpenAsk and had the whole
          week to upgrade the software to a presentable format. To start, we
          hired a designer to design the components and we found a Solidity
          developer at the hackathon to help us implement the smart contracts.
        </p>
        <p className="pt-3">
          We had 1 week to finish V2 of OpenAsk. Most of the week was spent
          upgrading our branding and implementing the crypto deposit and
          withdrawal functions. We also implemented a new feature called
          Eavesdrop which would allow users to peek in on questions that were
          asked to other Sensei's and see their answers.
        </p>
        <ProjectImg
          alt="OpenAsk V2 Eavesdrop"
          src="/openask-media/openask-v2-eavesdrop.png"
        />
        <p>
          Additionally, we added a Wallet tab to view your wallet balance as
          well as condensed the Questions and Answers tab to better reflect the
          status of the questions.
        </p>
        <ProjectImg
          alt="OpenAsk V2 Wallet"
          src="/openask-media/openask-v2-wallet.png"
        />
        <p>
          My responsibilities including connecting the crypto deposit and
          withdrawal functions to the custom smart contract we created. The
          smart contract would store the crypto in a wallet for 2 days until the
          question was answered by the targeted Sensei. If it was not answered,
          the use could withdraw the crypto back to their wallet from the smart
          contract.
        </p>
        <p className="pt-3">
          Additionally, the eavesdrop contract was completely different. We
          wanted to create a feature where when someone eavesdropped a question,
          the payment would be split evenly between the user asking the question
          and the sensei answering the question. We had to crearte a custom
          splitter smart contract to accomplish this.
        </p>
        <p className="pt-3">
          It was my first time working with solidity and implementing smart
          contracts with Javascript. It was a difficult process but I learned so
          much about how Solidity interacts with the frontend and all of the
          nuances that come with it.
        </p>
        <ProjectImg
          alt="OpenAsk V2 Questions"
          src="/openask-media/openask-v2-questions.png"
        />
        <p>
          We also added a few other key features to OpenAsk during this time.
          First, we changed our login method by implementing Web3Auth. Web3Auth
          allows users to login with any of the popular social media platforms
          such as Twitter, Facebook, and Google, as well as through an external
          crypto wallet such as Metamask. However, it also automatically creates
          a wallet for the user if they login through social media. We also
          started experimenting with audio answers for sensei's answering
          questions.
        </p>
        <ProjectImg
          alt="OpenAsk V2 Audio"
          src="/openask-media/openask-v2-audio.png"
        />
        <p>
          I had to work very closely with our designer who helped design the
          components in Figma. I was responsible for translating those Figma
          designs as accurately as possible into React components while adding
          the proper functionality. On one hand, it was nice to have help on the
          design aspect of the project, but on the other hand, it was difficult
          to translate the designs into code. It was a great learning experience
          and I am very proud of my work.
        </p>
        <p className="pt-3">
          In the end, we narrowly completed the project in time for the
          Hackathon and were able to present to the judges. We ended up winning
          $2,000 in prizes and were very proud of our work! If you want to learn
          more about my experience participating in the ETH Denver hackathon,
          check out my{" "}
          <a
            className="portfolio-link"
            href="https://twitter.com/ricefarmernft/status/1633234708992540673?s=46&t=jkHZ2Zl3GKfqVooi1MDQcg"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          post!
        </p>
        <p className="pt-3">
          Below is the demo video we created for the hackathon:
        </p>
        <div className="project-img">
          <iframe
            width="560"
            height="315"
            className="website-img"
            src="https://www.youtube.com/embed/DFs54ekk6q0"
            title="OpenAsk V2 Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Content>
      {/* Version 3 */}
      <Title title="Version 3" />
      <ProjectImg
        alt="OpenAsk V3 Landing Page"
        src="/openask-media/openask-v3-landing-page.jpeg"
      />
      <p>
        With Version 2 done, we wanted to continue to improve the product and
        create a production grade website that we could launch to the public as
        well as to gain investors.
      </p>
      <p className="pt-3">
        We decided to rebrand the website to a more fun look and feel, opting
        for new branding, new fonts, and a new logo. We felt the whimsical feel
        of the website would better reflect the fun and playful nature of the
        product as well as appeal to the crypto and Web 3 community.
      </p>
      <p className="pt-3">
        It was important for us to condense the different tabs even further, as
        we felt the current pages were too overwhelming for the user. We
        scrapped the transaction history page and prioritized the Discover,
        Answers, and Profile tabs to display all of our information.
      </p>
      <p className="pt-3">
        The discover tab would contain the feed and sensei pages. The answers
        tab would only be viewable for sensei's as it would contain questions
        that they need to answer and have already answered. The profile tab
        would contain the users questions asked, questions eavesdropped, as well
        as their wallet and balance information.
      </p>
      <p className="pt-3">
        We also decided to migrate away from the smart contracts into our own
        internal ledger. We felt that the smart contracts were too expensive and
        complicated to navigate, especially for the beta of OpenAsk. We saw the
        success Blur had with their internal ledger so we decided to follow
        suit.
      </p>
      <p className="pt-3">
        Importantly, we still allow you to deposit USDC or USDT into our company
        Ethereum wallet. We would then credit your OpenAsk account once that
        transaction is complete. For USD deposits, we integrated Stripe.
      </p>
      <p className="pt-3">
        I was also tasked with integrating audio answers to the platform. To
        prevent answers from getting leaked, we decided to only allow answers to
        be answered through audio. This way, you could verify the Sensei
        answered the question and that it could not be easily copied to another
        platform. I accomplished this using the JS audio recorder library and
        storing the audio files in the Alibaba Cloud.
      </p>
      <p className="pt-3">
        Additionally, we brought on 2 more backend developers to revamp our
        database and API. This would help improve the speed of the website and
        reduce the amount of data we were sending to the frontend.
      </p>
      <p className="pt-3">
        I encountered many problems with changing to a new database as most of
        my code had to be rewritten and refactored. Lots of testing and bugs to
        deal with. However, it was worth it in the end to make a faster and more
        efficient website.
      </p>
      <p className="pt-3">
        A lot of my time was also spent optimizing OpenAsk for tablet and
        mobile. We expected many users to want to browse OpenAsk on their phone
        or tablet, so we wanted to make sure the experience was as smooth as
        possible. This required creating multiple different layouts and finding
        the best way to display the information.
      </p>
      <p className="pt-3">
        Another big change we made was creating a separate sensei sign up flow.
        Previously, once a user signed up they were automatically a sensei as
        well. However, we wanted to make sure that only the best and most
        qualified sensei's were allowed to answer questions. We created a
        separate sensei sign up flow that required the user to input a code we
        would give them to become a sensei and sign up with Twitter in order to
        create their profile. They could also set a minimum amount that they
        would accept when asked a question.
      </p>
      <p className="pt-3">
        {" "}
        <a
          className="portfolio-link"
          href="https://openask.me/"
          target="_blank"
          rel="noreferrer"
        >
          Openask
        </a>{" "}
        is currently available to the public!
      </p>
    </>
  );
}
