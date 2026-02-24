import React from "react";

export default function Price({ originalPrice, salePrice }) {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="book__price--sale">${salePrice.toFixed(2)}</span>
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  );
}
