import React, { useState, useEffect, useRef } from "react";
import "./Blog.css";
import profilepic from "../../assets/DSC2.png";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsContainerRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log("data", data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const startAutoScroll = () => {
    const interval = setInterval(() => {
      if (blogsContainerRef.current) {
        blogsContainerRef.current.scrollTop += 1;
        if (
          blogsContainerRef.current.scrollTop ===
          blogsContainerRef.current.scrollHeight -
            blogsContainerRef.current.clientHeight
        ) {
          blogsContainerRef.current.scrollTop = 0;
        }
      }
    }, 50); // Adjust speed here
    return () => clearInterval(interval);
  };
  return (
    <div className="container mt-3">
      <div className=" blog-title m-5">
        <h4>The Ritesh.in Blogs</h4>
      </div>
      <div className=" main d-flex" style={{ height: 750 }}>
        <div className="card w-100 m-2">
          <div className="card-body profile-body">
            <div className="ppimgdiv">
              <img src={profilepic} alt="pp" className="ppimg" />
            </div>
            <div className="profiledata">
              <div className="">
                <p className="name">Ritesh Pandey</p>
                <p className="degignation">Software Engineer</p>
              </div>
              <div className="connect">
                <BsFillPersonPlusFill />
              </div>
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://www.facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="introduction">
              <p>
                " I am highly motivated Software Engineer with expertise in
                Java, HTML, CSS, JavaScript, and SQL. He has a proven track
                record in IoT and web app development, leveraging technologies
                like Ruby on Rails and React. Committed to career growth and
                making a meaningful impact in tech. "
              </p>
            </div>
          </div>
        </div>

        <div className="card w-100 m-2">
          <div className="card-body blogs-card">
            <div className="blog-tit mb-3">
              <p
                style={{
                  textAlign: "center",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                Blogs
              </p>
            </div>
            <div className="blog-contains" ref={blogsContainerRef}>
              <div className="blogs">
                {blogs.map((blog) => (
                  <div className="blog" key={blog._id}>
                    <div className="blog-heading">
                      <p
                        style={{
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                      >
                        {blog.blogTitle} {/* Assuming the field name is 'blogTitle' */}
                      </p>
                    </div>
                    <div className="blog-paaragraph">
                      {blog.blogDescription} {/* Assuming the field name is 'blogDescription' */}
                      {/* Link to the Blogview component with the blog ID */}
                      <Link to={`/blogview/${blog._id}`} className="more-link">
                        More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card w-100 m-2">
          <div className="card-body">
            <p
              style={{
                textAlign: "center",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              About Me
            </p>
            <div style={{ overflowY: "auto", height: 677 }}>
              <p>
                I am Ritesh Pandey, a dedicated and ambitious Software Engineer
                with a strong foundation in information technology, having
                earned a B.Tech from United College of Engineering and Research,
                Prayagraj. With proficiency in Java, HTML, CSS, JavaScript, SQL,
                and frameworks like Ruby on Rails and React.js, I have a keen
                interest in IoT and API technologies. In my current role at Pin
                Services Pvt Ltd, I have designed and developed several web
                applications, including an IoT-based Weather Station, KSMY, and
                GPI. My projects have involved using technologies like Ruby on
                Rails, MySQL, PostgreSQL, and Elasticsearch, showcasing my
                versatility and adaptability. Driven by a passion for continuous
                learning and growth, I am committed to leveraging my skills and
                experience to make a significant impact in the tech industry. My
                goal is to innovate and excel in my career, contributing
                meaningfully to the field of software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
