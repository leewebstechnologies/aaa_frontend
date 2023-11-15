import { useState, useEffect } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer",
//     imgUrl: images.about0,
//   },
//   {
//     title: "Frontend Development",
//     description: "I am a good frontend developer",
//     imgUrl: images.about1,
//   },
//   {
//     title: "Backend Development",
//     description: "I am a good backend developer",
//     imgUrl: images.about2,
//   },
//   {
//     title: "MERN Stack",
//     description: "I am a good MERN Stack developer",
//     imgUrl: images.about04,
//   },
//   {
//     title: "Graphic Design",
//     description: "I am a good graphic designer",
//     imgUrl: images.about3,
//   },
//   {
//     title: "Arabic and Islamic Education",
//     description: "I am a good teacher",
//     imgUrl: images.about4,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Development</span>
        <br /> means
        <span> Good Business</span>
      </h2>
      <p>
        I am an experienced software developer who is very proficient at
        building scalable, fast performing applications and software using React
        Js and its ecosystem. I have thrived in the web development space for
        more than 3+ years now and have amassed the prerequisite expertise
        needed to bring your Web Product to life. What gives me an edge is the
        fact that I also know how to make eye-catching graphic design.
      </p>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
