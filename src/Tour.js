import { useState } from "react";

export default function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4> {name} </h4>
          <h4 className="tour-price"> {price} </h4>
        </div>
        <div>
          <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show Less" : "read more"}
          </button>
        </div>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}
