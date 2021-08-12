import React from "react";
import { getTable } from "../lib/airtable";
import NextImage from "next/image";

function About({ data }) {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about-heading">About Me</h1>
        <div className="about-image">
          <NextImage
            src="/static/img/ibrahim-gedik.jpg"
            width="115px"
            kmerhaba
            height="115px"
            objectFit="cover"
            loading="lazy"
            quality="80"
            alt="My Profile Picture"
          />
        </div>
        <p className="about-description">
          I'm a passionate self-taught <a href="https://www.linkedin.com/in/ibrahimgedik/" aria-label="İbrahim Gedik Linkedin Account" className="note">Software Developer</a>, Technology enthusiast and Management Information Systems student. I'm very interested in topics such as front-end technologies and photography. I tend to
          make use of modern web technologies to build websites that look
          awesome. When I'm not coding, I take photos, watch movies and enjoying time with my friends.
          <br />
          I'm currently living in Istanbul, Turkey and developing things at <a rel="noopener" href="https://www.beranet.com.tr/" aria-label="My Company" className="note">Beranet</a> as a Front-end Developer
        </p>
        <div className="divider"></div>
        <h1 className="photos-heading">Photos</h1>
        <p className="photos-description">
        I'm listing the photos I took and thought you'd like here, you can check out my <a href="https://vsco.co/ibrahimgedik/gallery" aria-label="İbrahim Gedik Vsco.co Account" rel="noopener" className="vsco note" target="_blank">Vsco.co</a> account to see more.
        </p>
        <div className="photos">
          {data.map((item) => (
            <div className="photo" key={item.id}>
              <NextImage
                src={item.Photo[0].thumbnails.full.url}
                alt="Vsco.co Photos"
                width="100%"
                height="100%"
                objectFit="cover"
                layout="responsive"
                loading="lazy"
                quality={50}
                className="photo-x"
              />
            </div>
          ))}
        </div>
        <div className="divider"></div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const data = await getTable("Photos");

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}
export default About;
