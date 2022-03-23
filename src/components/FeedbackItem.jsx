import React, { useContext } from "react";
import FeedbackContext, { AppContext } from "./context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item }: any) => {
  const { deleteFeedback, editFeedback } = useContext(
    FeedbackContext
  ) as AppContext;

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
