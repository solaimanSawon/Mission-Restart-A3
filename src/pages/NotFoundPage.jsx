import { Link, useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();

  return (
    <section className="error-page">
      <img src="/assets/error-404.png" alt="Page not found" />
      <h1>404 - Route Not Found</h1>
      <p>
        {error?.statusText || "The page you requested does not exist or was moved."}
      </p>
      <Link className="show-all-btn" to="/">
        Back to Home
      </Link>
    </section>
  );
}
