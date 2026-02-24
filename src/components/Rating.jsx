import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rating({ rating }) {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, i) => (
        <FontAwesomeIcon key={i} icon="star" className="book__ratings--icon" />
      ))}
      {!Number.isInteger(rating) && (
        <FontAwesomeIcon icon="star-half-alt" className="book__ratings--icon" />
      )}
    </div>
  );
}
