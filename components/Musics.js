import React from "react";
import MusicCard from "./MusicCard";


function Musics() {
  return (
    <section className="musics">
      <div className="container">
        <h1 className="musics-heading">Top Tracks</h1>
        <p className="musics-description">Here's my top tracks on Spotify</p>
        <MusicCard />
      </div>
    </section>
  );
}

export default Musics;
