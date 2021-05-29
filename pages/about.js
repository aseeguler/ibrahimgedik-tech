import React from "react";
import { getTable } from "../lib/airtable";
import NextImage from "next/image";

function About({ data }) {
  return (
    <>
    <div className="about">
      <div className="container">
        <h1 className="about-heading">About Me</h1>
        <div className="about-image">
          <NextImage
            src="/static/img/ibrahim-gedik.jpg"
            width="115px"
            height="115px"
            objectFit="cover"
            loading="lazy"
            quality="80"
          />
        </div>
        <p className="about-description">
          I'm a passionate self-taught <a href="" className="note">Software Developer</a> and Management Information Systems student based in Istanbul, Turkey. I'm interested in web technologies. I tend to
          make use of modern web technologies to build websites that look
          awesome.
          <br /> 
          I'm currently living in Istanbul, Turkey and developing web apps at <a href="" className="note">Beranet</a>
          <br />

        </p>
        <div className="divider"></div>
        <h1 className="photos-heading">Photos</h1>
        <div className="photos">
          {data.map((item) => (
            <div className="photo" key={item.id}>
              <NextImage
                src={item.Photo[0].thumbnails.full.url}
                alt={item.Name}
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
      </div>
    </div>
    </>
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
