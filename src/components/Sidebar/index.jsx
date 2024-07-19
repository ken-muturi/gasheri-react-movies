import React from "react";

const Index = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="/movies">
            <i className="bi bi-question-circle"></i>
            <span>movies</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/authors">
            <i className="bi bi-question-circle"></i>
            <span>Authors</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/ratings">
            <i className="bi bi-question-circle"></i>
            <span>Ratings</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/genres">
            <i className="bi bi-question-circle"></i>
            <span>Genres</span>
          </a>
        </li><li className="nav-item">
          <a className="nav-link collapsed" href="/countries">
            <i className="bi bi-question-circle"></i>
            <span>Countries</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/faqs">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Index;
