import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { IoMdPhotos } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("");
  const loggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
        title="Home"
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/about"
        onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""}
        title="About"
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/experience"
        onClick={() => setActiveNav("/experience")}
        className={activeNav === "/experience" ? "active" : ""}
        title="Experience"
      >
        <BiBook />
      </Link>
      <Link
        to="/project"
        onClick={() => setActiveNav("/project")}
        className={activeNav === "/project" ? "active" : ""}
        title="Project"
      >
        <GoProject />
      </Link>
      <Link
        to="/contactus"
        onClick={() => setActiveNav("/contactus")}
        className={activeNav === "/contactus" ? "active" : ""}
        title="Contact Us"
      >
        <BiMessageSquareDetail />
      </Link>
      <Link
        to="/blog"
        onClick={() => setActiveNav("/blog")}
        className={activeNav === "/blog" ? "active" : ""}
        title="Blogs"
      >
        <FaBlog />
      </Link>
      {loggedIn === "true" && (
        <>
          <Link
            to="/admin"
            onClick={() => setActiveNav("/admin")}
            className={activeNav === "/admin" ? "active" : ""}
            title="Admin"
          >
            <RiAdminFill />
          </Link>
          
          <Link to="/" onClick={handleLogout} title="Logout">
            <RiLogoutCircleRFill />
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
