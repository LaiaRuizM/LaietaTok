import styles from "./styles.module.css";
import React from "react";
import SRC2 from "./coffee.gif";

// const SRC = "../coffee.gif";

export default function VideoPlayer() {
  return (
    <div>
      <video
        autoPlay
        muted
        className={styles.video}
        //   type="text/html"
        src={SRC2}
        controls={false}
      />
      <button> </button>
    </div>
  );
}
