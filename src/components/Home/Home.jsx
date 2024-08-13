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
                    }}
                >
                    Main Theme
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("GRASS.MP3");
                    }}
                >
                    Grass Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("LAVA.MP3");
                    }}
                >
                    Lava Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("ROUGH.MP3");
                    }}
                >
                    Distant Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SAND.MP3");
                    }}
                >
                    Sand Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SNOW.MP3");
                    }}
                >
                    Snow Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("SWAMP.MP3");
                    }}
                >
                    Swamp Zone
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("WATER.MP3");
                    }}
                >
                    Water Zone
                </button>

                <button
                    onClick={() => {
                        playing.pause();
                        setSong("AITheme0.mp3");
                    }}
                >
                    AI Theme 1
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("AITHEME1.MP3");
                    }}
                >
                    AI Theme 2
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("Win Scenario.mp3");
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
                    }}
                >
                    Combat 1
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("COMBAT02.MP3");
                    }}
                >
                    Combat 2
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("COMBAT03.MP3");
                    }}
                >
                    Combat 3
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("COMBAT04.MP3");
                    }}
                >
                    Combat 4
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("Win Battle.mp3");
                    }}
                >
                    Win Battle
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("LoseCombat.mp3");
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
                    }}
                >
                    Castle
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("DUNGEON.MP3");
                    }}
                >
                    Dungeon
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("necroTown.mp3");
                    }}
                >
                    Necropolis
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("FortressTown.mp3");
                    }}
                >
                    Fortress
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("InfernoTown.mp3");
                    }}
                >
                    Inferno
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("necroTown.mp3");
                    }}
                >
                    Necropolis
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("RAMPART.MP3");
                    }}
                >
                    Rampart
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("StrongHold.mp3");
                    }}
                >
                    Stronghold
                </button>
                <button
                    onClick={() => {
                        playing.pause();
                        setSong("TowerTown.mp3");
                    }}
                >
                    Tower
                </button>
            </div>
        </>
    );
}

export default Home;
