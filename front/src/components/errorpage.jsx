import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error-page flex flex-column flex-cross-center text-center">
      <h1 className="error-title">
        Sorry! The page you're looking for doesn't exist :(
      </h1>
      <Link to="/" className="go-to-main">
        Go to main page
      </Link>
    </div>
  );
};

export default ErrorPage;
