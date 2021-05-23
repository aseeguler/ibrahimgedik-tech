import React from "react";
import { getTable } from "../lib/airtable";
import NextImage from "next/image";

function About({ data }) {
  return (
    <div className="about">
      <div className="container">
        <div className="photos">
          {data.map((item) => (
            <div className="photo" key={item.id}>
              <NextImage
                src={item.Photo[0].thumbnails.full.url}
                alt={item.Name}
                width="200px"
                height="200px"
                objectFit="cover"
                layout="responsive"
                loading="lazy"
                quality={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
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
