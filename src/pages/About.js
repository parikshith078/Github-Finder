import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="hero">
      <div className="hero-content max-w-lg">
        <h1 className="text-8xl">About</h1>
        <div>
          <p className="p-5">
            This is a React web app for finding and connecting with like minded
            people in Github
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
