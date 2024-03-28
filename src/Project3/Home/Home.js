import React from "react";
import "./Home.css";

const Home = () => (
  <div>
    <h2>Welcome to My Portfolio</h2>
    <p>
      I'm Ameer, a dedicated frontend web developer with a passion for crafting
      immersive digital experiences. With a keen eye for design and a strong
      command of the latest frontend technologies, I specialize in bringing
      ideas to life through elegant and intuitive user interfaces. Whether it's
      creating responsive layouts that seamlessly adapt to various screen sizes
      or optimizing performance for lightning-fast loading times, I thrive on
      pushing the boundaries of what's possible in the ever-evolving world of
      web development. From conceptualizing wireframes to meticulously crafting
      pixel-perfect designs, I approach each project with creativity, precision,
      and a relentless pursuit of excellence. Let's collaborate to transform
      your vision into reality and elevate your online presence to new heights.
    </p>

    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>Database Management (MongoDB, MySQL)</li>
      </ul>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <p>
        I have worked on various web development projects, both independently
        and collaboratively, gaining valuable experience in:
      </p>
      <ul>
        <li>Project A: Description of Project A and your role</li>
        <li>Project B: Description of Project B and your role</li>
        {/* Add more projects */}
      </ul>
    </section>

    <section id="education">
      <h2>Education</h2>
      <p>
        I hold a Bachelor's degree in Computer Science from [Your University].
        Additionally, I have completed online courses and obtained
        certifications in web development technologies.
      </p>
    </section>

    <section id="achievements">
      <h2>Achievements</h2>
      <p>
        Throughout my career, I have been honored with several awards and
        recognitions for my contributions to the field of web development. Some
        of my achievements include:
      </p>
      <ul>
        <li>Recognition A: Description of Recognition A</li>
        <li>Recognition B: Description of Recognition B</li>
        {/* Add more achievements */}
      </ul>
    </section>
  </div>
);

export default Home;
