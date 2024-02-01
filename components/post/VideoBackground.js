// VideoBackground.jsx
import React from "react";
import styles from "./VideoBackground.module.css";

const VideoBackground = (props) => {
  return (
    <div
      className={`${styles["video-background"]} flex w-lg max-h-48 lg:min-h-72 rounded-3xl bg-cover bg-center bg-background bg-no-repeat mb-0 `}
    >
      <video controls className={styles.video}>
        <source src={props.imageUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`${styles.content} flex w-full mt-auto lg:w-96 h-8 mr-1 ml-12 rounded-3xl bg-gradient-to-b from-background/30 to-red-900/80 to-30%`}
      >
        <p className="my-auto ml-3 text-white font-semibold">{props.caption}</p>
      </div>
    </div>
  );
};

export default VideoBackground;
