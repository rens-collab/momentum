import React from "react";

import storyImg from "../assets/story.jpg";
import aboutUsImg from "../assets/aboutus.jpg";
import rensImg from "../assets/rens1.jpg";
import shahriyorImg from "../assets/Shakhriyor1.jpg";
import usmanImg from "../assets/usman1.jpg";
import boburImg from "../assets/Phlorenci1.jpg";

function About() {
  return (
    <>
      <header>
        <h2>ABOUT US</h2>
        <p>Who are we? What do we do?</p>
      </header>

      <div className="container_about_page">
        <div className="story-box">
          <h3>Our Story</h3>
          <p>
            We started with a simple goal: to make fitness and nutrition easier
            for everyone.
            <br />
            Frustrated by one-size-fits-all advice and complex tracking tools,
            we set out to create something better—a smarter, more personal
            approach to health. Whether you're just starting your journey or
            fine-tuning your performance, our calculator was built to give you
            the insights you need to succeed.
            <br />
            <br />
            No gimmicks, no fluff—just science-backed guidance tailored to you.
            From macros and calories to workouts that match your goals, we’ve
            combined accuracy with simplicity to help you take control of your
            health, one step at a time.
            <br />
            <br />
            This is more than just a calculator—it’s your personalized plan,
            your daily guide, and your partner in progress.
            <br />
            <br />
            Let’s build something stronger, together.
          </p>
        </div>
        <img src={storyImg} alt="Photo of group" className="Img" />
      </div>

      <div className="container_about_page">
        <img src={aboutUsImg} alt="Photo of group" className="Img" />
        <div className="story-box">
          <h3>About us</h3>
          <p>
            We’re a group of four students from Uzbekistan and the Netherlands,
            brought together by a shared passion for design, programming, and
            healthy living.
            <br />
            <br />
            We love building websites, lifting weights, and yes—eating good
            food. This project is where all those interests come together.
            <br />
            <br />
            Our goal is to create tools that make fitness and nutrition more
            accessible, accurate, and maybe even a little fun.
          </p>
        </div>
      </div>

      <br />

      <section id="group">
        {/* Rens */}
        <div className="Rens">
          <img src={rensImg} alt="Sample image Rens" />
          <h3>Rens</h3>
          <p>Enthusiastic programmer who likes to design</p>
          <p>
            <strong>Team leader</strong>
          </p>
          <div className="contact">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:rensvanputten5@gmail.com">
                rensvanputten5@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/rensvanputten/">
                Rens van Putten
              </a>
            </p>
            <p>
              <strong>Phone number:</strong> 010-2465-8572
            </p>
          </div>
        </div>

        {/* Shahriyor */}
        <div className="Shahriyor">
          <img src={shahriyorImg} alt="Sample image Shahriyor" />
          <h3>Shahriyor</h3>
          <p>Student at Sejong University 2nd year Computer Science</p>
          <p>
            <strong>Team Webdevelopment</strong>
          </p>
          <div className="contact">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:xoliyorovshahriyor@gmail.com">
                xoliyorovshahriyor@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/shahriyor-xoliyorov-7a2b29334/">
                Shahriyor Xoliyorov
              </a>
            </p>
            <p>
              <strong>Phone number:</strong> 010-5827-2216
            </p>
          </div>
        </div>

        {/* Usman */}
        <div className="Usman">
          <img src={usmanImg} alt="Sample image of Usman" />
          <h3>Usman</h3>
          <p>Computer Science student and 19 years old</p>
          <p>
            <strong>Team Webdevelopment</strong>
          </p>
          <div className="contact">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:usmonbekmirzayev06@gmail.com">
                usmonbekmirzayev06@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/usmonbek-bekmirzayev-3b7978358/">
                Usmonbek Bekmirzayev
              </a>
            </p>
            <p>
              <strong>Phone number:</strong> 010-6510-7911
            </p>
          </div>
        </div>

        {/* Bobur */}
        <div className="Bobur">
          <img src={boburImg} alt="Sample image Bobur" />
          <h3>Bobur</h3>
          <p>Enthusiastic student working from Seoul!</p>
          <p>
            <strong>Team Webdevelopment</strong>
          </p>
          <div className="contact">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:boburmirzarakhimov2006@gmail.com">
                boburmirzarakhimov2006@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/bobur-mirzarakhimov-08a066309/">
                Bobur Mirzarakhimov
              </a>
            </p>
            <p>
              <strong>Phone number:</strong> 010-8111-6787
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
