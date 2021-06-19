import React from "react";
import MusicCard from "./MusicCard";


function Musics() {
  return (
    <section className="musics">
      <div className="container">
        <h2 className="musics-heading">Top Tracks</h2>
        <p className="musics-description">Here's my top tracks on Spotify</p>
        <MusicCard />
      </div>
    </section>
  );
}

export default Musics;
