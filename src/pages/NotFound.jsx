import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page container not-found">
      <span className="eyebrow mono">404</span>
      <h1>This route doesn't exist.</h1>
      <p>
        Whatever you typed didn't match anything in the router.
      </p>
      <Link to="/" className="btn">
        ← back to home
      </Link>
    </div>
  );
}