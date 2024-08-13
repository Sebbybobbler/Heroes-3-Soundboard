import styles from "./Home.module.css";
import { useState, useEffect } from "react";

function Home() {
  let [song, setSong] = useState("");
  let playing = new Audio(`/themes/${song}`);

  useEffect(() => {
    console.log(playing);
    playing.play();
  }, [song, playing]);
  return (
    <>
      <div className={styles.titleDiv}>
        <h1>Campaign Map</h1>
      </div>
      <div className={styles.musicDiv}>
        <button
          onClick={() => {
            playing.pause();
            setSong("AITheme0.mp3");
            console.log(song);
          }}
        >
          AI Theme 1
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("AITHEME1.MP3");
            console.log(song);
          }}
        >
          AI Theme 2
        </button>
      </div>
      <div className={styles.titleDiv}>
        <h1>Combat</h1>
      </div>
      <div className={styles.musicDiv}>
        <button
          onClick={() => {
            playing.pause();
            setSong("COMBAT01.MP3");
            console.log(song);
          }}
        >
          Combat 1
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("COMBAT02.MP3");
            console.log(song);
          }}
        >
          Combat 2
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("COMBAT03.MP3");
            console.log(song);
          }}
        >
          Combat 3
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("COMBAT04.MP3");
            console.log(song);
          }}
        >
          Combat 4
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("Win Battle.mp3");
            console.log(song);
          }}
        >
          Win Battle
        </button>
        <button
          onClick={() => {
            playing.pause();
            setSong("LoseCombat.mp3");
            console.log(song);
          }}
        >
          Lose Battle
        </button>
      </div>
    </>
  );
}

export default Home;
