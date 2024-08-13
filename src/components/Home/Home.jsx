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
                        setSong("MAINMENU.MP3");
                        console.log(song);
                    }}
                >
                    Main Theme
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("GRASS.MP3");
                        console.log(song);
                    }}
                >
                    Grass Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("LAVA.MP3");
                        console.log(song);
                    }}
                >
                    Lava Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("ROUGH.MP3");
                        console.log(song);
                    }}
                >
                    Distant Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SAND.MP3");
                        console.log(song);
                    }}
                >
                    Sand Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SNOW.MP3");
                        console.log(song);
                    }}
                >
                    Snow Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SWAMP.MP3");
                        console.log(song);
                    }}
                >
                    Swamp Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("WATER.MP3");
                        console.log(song);
                    }}
                >
                    Water Zone
                </button>

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
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("Win Scenario.mp3");
                        console.log(song);
                    }}
                >
                    Win Scenario
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
            <div className={styles.titleDiv}>
                <h1>Town Themes</h1>
            </div>
            <div className={styles.musicDiv}>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("CstleTown.mp3");
                        console.log(song);
                    }}
                >
                    Castle
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("DUNGEON.MP3");
                        console.log(song);
                    }}
                >
                    Dungeon
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("necroTown.mp3");
                        console.log(song);
                    }}
                >
                    Necropolis
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("FortressTown.mp3");
                        console.log(song);
                    }}
                >
                    Fortress
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("InfernoTown.mp3");
                        console.log(song);
                    }}
                >
                    Inferno
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("necroTown.mp3");
                        console.log(song);
                    }}
                >
                    Necropolis
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("RAMPART.MP3");
                        console.log(song);
                    }}
                >
                    Rampart
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("StrongHold.mp3");
                        console.log(song);
                    }}
                >
                    Stronghold
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("TowerTown.mp3");
                        console.log(song);
                    }}
                >
                    Tower
                </button>
            </div>
        </>
    );
}

export default Home;
