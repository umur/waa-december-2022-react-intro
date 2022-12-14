import React from "react";

export default function ReviewList(props) {
  let reviews = props.reviews? props.reviews: [];

  return (
    <div>
      {reviews.map((item) => {
        return <div key={item.id}>{item.comment}<hr/></div>;
      })}
    </div>
  );
}
