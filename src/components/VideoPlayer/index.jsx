import { useRef, useState } from "react"; // To save the references of our video
import styles from "./styles.module.css";
import SRC2 from "./coffee.gif";

// const SRC = "../coffee.gif";

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const video = useRef();

  const handlePlay = () => {
    if (playing) {
      video.current.stop();
    } else {
      video.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <video
        className={styles.video}
        //   type="text/html"
        src={SRC2}
        controls={false}
        ref={video}
      />
      <button className={styles.player} onChangeCapture={handlePlay} />
    </div>
  );
}
