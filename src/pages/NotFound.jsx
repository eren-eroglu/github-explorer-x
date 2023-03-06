import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold mb-8">Ooooops!</h1>
          <h3 className="text-2xl">Page not found 😔 </h3>
          <Link to="/" className="btn btn-primary btn-md rounded-full m-5">
            <FaHome className="mr-2" />
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
