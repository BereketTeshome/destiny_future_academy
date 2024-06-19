import React from "react";
import { Link } from "react-router-dom";

const Library = () => {
  const ebooks = [
    { id: 1, title: "Physics", author: "Grade 7", imageUrl: "./physics.jpg" },
    { id: 2, title: "Biology", author: "Grade 7", imageUrl: "./biology.jpg" },
    {
      id: 3,
      title: "Chemistry",
      author: "Grade 7",
      imageUrl: "./chemistry.jpg",
    },
  ];

  return (
    <div className="library-container">
      <div className="library-header">
        <h1 className="title" style={{ textAlign: "center", flex: "1" }}>
          Library
        </h1>
        <Link to="/programs">
          <i>Special Programs</i>
        </Link>
      </div>
      <div className="ebook-grid">
        {ebooks.map((ebook) => (
          <div className="ebook-item" key={ebook.id}>
            <img
              className="ebook-cover"
              src={ebook.imageUrl}
              alt={ebook.title}
            />
            <h2 className="ebook-title">{ebook.title}</h2>
            <p className="ebook-author">{ebook.author}</p>
            <div className="ebook-actions">
              <button className="view-button">View</button>
              <button className="download-button">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
