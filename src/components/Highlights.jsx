import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./Highlight";
import React from "react";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
                icon={<FontAwesomeIcon icon="bolt" />}
                title="Easy and Quick"
                para="Get access to the book you purchased online instantly."
            />
            <Highlight
                icon={<FontAwesomeIcon icon="book-open" />}
                title="10,000+ Books"
                para="Explore our collection of over 100,000 books across various genres."
            />  
            <Highlight
                icon={<FontAwesomeIcon icon="tags" />}
                title="Affordable Prices"
                para="Get your hands on the most popular books at the best prices."
            />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Highlights;
