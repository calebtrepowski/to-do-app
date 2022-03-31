import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Sorry! The page you're looking for doesn't exist :(</h1>
      <Link to="/" className="go-to-main">Go to main page</Link>
    </div>
  );
};

export default ErrorPage;
