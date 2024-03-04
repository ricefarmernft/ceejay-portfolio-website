"use client";
import { Tweet } from "react-twitter-widgets";

export default function TweetFormat(props) {
  return (
    <div className="pt-2 pb-2">
      <Tweet
        tweetId={props.tweetId}
        options={{
          theme: "dark",
          align: "center",
        }}
      />
    </div>
  );
}
