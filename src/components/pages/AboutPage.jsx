import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app feedback to leave for a product or a service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
