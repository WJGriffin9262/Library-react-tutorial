import React from "react";
import { books } from "../data";
import Book from "./Book";

const Discounted = () => {
  return (
    <div>
      <section id="discounted"></section>
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice)
              .slice(0, 8)
              .map((book) => (
                <Book key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounted;
