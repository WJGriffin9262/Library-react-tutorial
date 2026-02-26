import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) setImg(image);
      }, 300);

      return () => {
        mountedRef.current = false;
      };
    };
  }, [book.url]);
  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/book/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={book.url} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/book/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <p className="book__author">by {book.author}</p>
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        // show skeletons until the image has loaded
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
