import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Blog1 from "../../assets/blog/blog1.jpeg";
import Blog2 from "../../assets/blog/blog2.png";
import Blog3 from "../../assets/blog/blog3.jpeg";

const Blogview = () => {
  const [blog, setBlog] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [copyLinkMessage, setCopyLinkMessage] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [randomImage, setRandomImage] = useState(Blog1); // Initialize with one image
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        const filteredBlog = data.find((blog) => blog._id === id);
        console.log("filteredBlog", filteredBlog);
        setBlog(filteredBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    const randomizeImage = () => {
      const images = [Blog1, Blog2, Blog3];
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    };

    fetchBlog();
    randomizeImage();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/${id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: newComment,
            dateTime: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const updatedBlogResponse = await fetch(
        `http://localhost:5000/api/blogs`
      );
      if (!updatedBlogResponse.ok) {
        throw new Error("Failed to fetch updated blog");
      }
      const updatedData = await updatedBlogResponse.json();
      const updatedBlog = updatedData.find((blog) => blog._id === id);
      setBlog(updatedBlog);

      setNewComment("");
      setCommentMessage("Comment submitted successfully!");
      setTimeout(() => {
        setCommentMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      setCopyLinkMessage("Link copied!");
      setTimeout(() => {
        setCopyLinkMessage("");
      }, 5000);
    });
  };

  return (
    <div className="container mt-2">
      <div className="blog-title m-5">
        <h4>The Ritesh.in Blogs</h4>
        <Link to="/blog" className="btn btn-link more-link">
              Back
        </Link>
      </div>
      <div className="card card-1">
        <div className="card card-2">
          <img src={randomImage} alt="Blog" className="img" />
        </div>
      </div>
      <div className="card card-1">
        <div className="card card-2">
          {blog ? (
            <div>
              <h2>{blog.blogTitle}</h2>
              <p>{blog.blogDescription}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="card card-bottom">
          <div className="comments">
            <FaComments />
            <p>{blog && blog.comments ? blog.comments.length : 0} </p>
          </div>
          <div className="link">
            <FaLink />
            <Link className="more-link" onClick={handleCopyLink}>
              Copy Link
            </Link>
            <span className="copy-link-message">{copyLinkMessage}</span>
          </div>
        </div>
        <div className="c-area">
          <div className="card comment-area">
            {blog && blog.comments ? (
              <ul>
                {blog.comments.map((comment, index) => (
                  <li key={index}>* {comment.comment}</li>
                ))}
              </ul>
            ) : (
              <p>No comments yet</p>
            )}
          </div>
          <div className="card comment-section m-2">
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add your comment here..."
              rows={4}
              cols={50}
            />
            <button
              className="btn btn-secondry mt-2"
              onClick={handleSubmitComment}
            >
              Submit
            </button>
            <span className="comment-message">{commentMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogview;
