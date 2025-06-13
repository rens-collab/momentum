import React from "react";
import { Link } from "react-router-dom";
import headerVideo from "../assets/header_video.mp4";
import logo from "../assets/favicon.jpg"
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [quote, setQuote] = useState("");

useEffect(() => {
  axios
    .get("http://localhost:5001/api/quotes")
    .then((res) => setQuote(res.data.quote))
    .catch((err) => console.error("Failed to fetch quote", err));
}, []);

  return (
    <>
      <video autoPlay muted loop playsInline id="bg-video">
        <source src={headerVideo} type="video/mp4" />
      </video>

      <section id="header_home">
        <img className="logo" src={logo} />
        <h1>MOMENTUM</h1>
        <h3>Get your free diet plan & workout plan</h3>
        <div id="buttons">
          <Link className="primair" to="/about">
            About Us
          </Link>
          <Link className="secundair" to="/calculator">
            Go to Calculator
          </Link>
        </div>
      </section>

      <section id="box1">
        <h2>About Website</h2>
        <p>
          Welcome to <strong>Momentum</strong> — your all-in-one destination for
          fitness, nutrition, and motivation!
          <br />
          Our mission is simple: to help you build a healthier, stronger, and
          more confident version of yourself. Whether you're just starting your
          fitness journey or looking to level up your current routine, we’ve got
          the tools and support you need.
        </p>
        <p>
          <strong>Workout Plans:</strong> We offer beginner-friendly and
          goal-oriented routines, from full-body strength to cardio bursts — all
          tailored to your fitness goals.
        </p>
        <p>
          <strong>Nutrition Tips & Diet Plans:</strong> Fuel your body the right
          way with practical diet guides and tips, perfect for fat loss, muscle
          gain, or just staying healthy.
        </p>
        <p>
          <strong>Fitness Calculators:</strong> Estimate your ideal weight,
          daily calories, BMI, and more with our smart tools for accurate
          progress tracking.
        </p>
        <p>
          Momentum isn’t just a website — it’s a community. Join us on the path
          to consistent progress and sustainable change. Let’s move forward —
          together.
        </p>

        <section id="quote_section">
          <blockquote>{quote}</blockquote>
        </section>
      </section>
    </>
  );
}

export default Home;
