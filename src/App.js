import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <FeedbackProvider>
          <div className="container">
            <Route exact path="/">
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <AboutIconLink />
            </Route>
            <Route path="/about" component={AboutPage} />
          </div>
        </FeedbackProvider>
      </Router>
    </>
  );
}

export default App;
