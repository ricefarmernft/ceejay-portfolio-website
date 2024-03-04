import Header from "../components/header";
import Title from "../components/title";
import Content from "../components/content";
import TweetFormat from "../components/tweetFormat";
import List from "../components/list";
import ProjectImg from "../components/projectImg";
import SubTitle from "../components/subTitle";

export default function Icebreakers() {
  return (
    <>
      {/* Header */}
      <Header title="Icebreakers" website="https://www.icebreakers.dev/" />
      <Content>
        <Title title="Inspiration" />
        <p>
          The inspiration for this project came from my own experience using
          online dating apps. I was frustrated with the amount of time it took
          me to come up with a unique and clever icebreaker whenever I had a
          match. Sometimes, I would be stuck on a particular match for multiple
          days until I would give up. As a result, I started using Chat GPT to
          generate my icebreakers. But even that was taking up a lot of time, as
          I would have to spin up the website and come up with an appropriate
          prompt. I eventually had enough and decided to come up with my own
          seamless solution to this problem by creating an AI app that would
          generate "icebreakers". And so, icebreakers was born!
        </p>
        <ProjectImg
          href="https://www.icebreakers.dev/"
          alt="Icebreakers Website"
          src="/icebreakers-media/icebreakers-landing-page.png"
        />
        <List
          languages={["Javascript", "HTML", "CSS"]}
          dependencies={["React", "MUI Library"]}
          apis={["Open AI API"]}
        />
        <Title title="Styling" />
        <p>
          It was really important that this app was optimized for mobile first,
          as that is where most online dating takes place. Luckily, the MUI
          library makes it easy to create responsive websites. I also designed
          the MUI components to be as simple as possible. My main goal was to
          make this app easy and fast to use. For the logo, I used{" "}
          <a
            href="https://app.brandmark.io/v3/"
            className="portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            Brandmark
          </a>{" "}
          for inspiration. Brandmark is a great tool for creating logos and
          branding, and that is how I came up with both my Logo and the Font.
          For the coloring, I wanted to use shades of blue and pink to represent
          the primary male and female colors. I used{" "}
          <a
            href="https://app.haikei.app/"
            className="portfolio-link"
            target="_blank"
            rel="noreferrer"
          >
            Haikei
          </a>{" "}
          to generate the background gradient, and then experimented with
          different colors for the buttons and boxes until I found combinations
          that I liked.
        </p>
        <Title title="Vision" />

        <p>
          My vision for this project was to use the Open AI API to generate 3
          unique and clever pickup lines that could be sent to your online
          dating matches. I had already experimented with this concept using
          Chat GPT before, but I had some free time and wanted to build an app
          to make this process easier and quicker. With icebreakers, you simply
          input your matches name, gender, and a fun fact. Then, click generate
          and the app will return unique icebreakers that you can either copy
          and paste straight into the dating app or take inspiration from to
          come up with your own!
        </p>
        <ProjectImg
          alt="Icebreakers Website"
          src="/icebreakers-media/icebreakers-example.png"
        />
        <p>
          Utilizing the Open AI API was a very fun and creative process. There
          are dozens of models you can choose from and I decided to go with the
          GPT 3.5 model. I would have used GPT 4, the latest update, but I have
          not been granted access yet. However, GPT 3.5 would be sufficient for
          now, as that is the model that standard Chat GPT is based off of.
        </p>
        <p className="pt-3">
          I should note that if you use the GPT 3 Model you can actually "train"
          the AI based on specific icebreakers. This would be useful if I had a
          large dataset of icebreakers that received positive responses so I
          could better train the AI to generate better icebreakers. If I were to
          collect feedback on the icebreakers, this could be a future goal.
        </p>
        <p className="pt-3">
          First, I would have to come up with the prompt. This was the most
          important part of the process, as you can only receive great outputs
          with a great standard prompt. I experimented with a variey of prompts
          until I found one that would return longer icebreakers that swayed to
          the funny and clever style. Personally, I wanted the app to match my
          humor and I also wanted the icebreakers to seem thoughtful and drawn
          out a bit.
        </p>
        <p className="pt-3">
          There were also multiple different settings you can choose from using
          GPT 3.5. These included temperature, number of iterations, and max
          characters. Temperature is the uniqueness of the outputs. Basically, a
          higher temperature means you would receive a more unique and sometimes
          strange response. I set this to the max because I wanted the most
          unique outputs you could come up with. For number of iterations, I
          choose 3. I wanted the user to be able to choose between a few
          icebreakers, but I also had to be aware of the costs. This also
          coincides with max tokens, which represents the length of the
          icebreaker. I didn't want the icebreakers to be too long as it would
          cost more. And for now, I am bootstrapping the app out of my own
          pocket.
        </p>
        <p className="pt-3">
          I added a loader component to app that would appear after you clicked
          the "Generate" button. It's important to note that the generate button
          will only become active if there is a name and gender inputted into
          the respective fields. Fun fact is an optional input, but I would
          strongly reccomend filling it in as it provides much better
          icebreakers. I also added an uppercase and lowercase switch to format
          the outputs according to your personal preference if you were to copy
          and paste the icebreakers straight into the dating app. Lastly, I
          added a clear form button as a fast way to start the process over
          again.
        </p>
        <Title title="Testimonials" />
        <p>
          I have not widely publicized the app yet because the OpenAI API does
          cost money to use. However, I have shared it with my personal circle
          and have of course used it myself. The responses I received were
          mostly positive!
        </p>
        <div className="project-img-grid">
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-1.png"
          />
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-2.png"
          />
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-3.png"
          />
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-4.png"
          />
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-5.png"
          />
          <ProjectImg
            class="hinge-img"
            alt="Hinge Match"
            src="/icebreakers-media/icebreakers-6.png"
          />
        </div>
        <p>
          I am extremely happy with the results of this project! Although it may
          take a few generations, I can expect to receive a pretty witty
          icebreaker that is unique to my matches personality. Enough so to get
          a positive response, which I can then continue the conversation to
          create a deeper connection
        </p>
        <p className="pt-3">
          In the future, I plan to upgrade the API model to GPT 4. I also would
          like to provide categories to choose an icebreaker (more
          funny/clever/romantic/etc.) as well as create a feature where the user
          can pick an icebreaker they like but generate more options based on
          that specific style. I would also like to add a feedback form where I
          can gather data on the best icebreakers. But for now, I will continue
          using icebreakers to save time and accelerate my online dating
          experience!
        </p>
        <p>
          Disclaimer: This app is only intended for the initial icebreaker. The
          steps after that are out of my scope 😂
        </p>
        <Title title={"Update (4/30/2023)"} />
        <ProjectImg
          src="/icebreakers-media/icebreakers-generate-similar.jpg"
          alt="Icebreakers Generate Similar"
        />
        <p>Icebreakers has been updated to use the GPT4 API!</p>
        <p className="pt-3">
          At first glance, the results are much better and more unique. The
          generations tend to be longer and address the fun fact more directly.
          I still think it is best to use this tool as an idea generator and
          then modify it slightly to your personality, as the responses can
          sometimes sound "AI generated".
        </p>
        <p className="pt-3">
          I also added a new feature where you can generate more icebreakers
          based on a previous icebreaker. This is useful if you like the style
          of a particular icebreaker and want to generate more like it! Good
          luck!
        </p>
      </Content>
    </>
  );
}
