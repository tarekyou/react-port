import React from "react";
import coverImage from "../../assets/150.png";

function About() {
  return (
    <section className="my-5 ">
      <h1 id="about" className="centertext">
        Who am I?
      </h1>
      <img src={coverImage} className="my-2 center-justify" alt="cover" />
      <p className="centertext">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
        molestiae expedita. Est consectetur labore nesciunt asperiores dicta,
        ducimus perferendis soluta quibusdam iure unde tempore veniam magni
        dolorum sunt quidem illum?
      </p>
    </section>
  );
}

export default About;
