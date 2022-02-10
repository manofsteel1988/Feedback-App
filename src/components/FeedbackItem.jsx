import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";

const FeedbackItem = ({ item, handleDelete }) => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feedback item");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
