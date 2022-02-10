import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are yous ure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            <AboutIconLink />
          </Route>
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    </>
  );
}

export default App;
