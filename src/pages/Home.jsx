import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page container home">
      <span className="eyebrow"> software developer</span>
      <h1 className="home-title">
        Jhon Paul Consorte<br />
      </h1>
      <p className="home-lede">
        I'm a computer science student who's studying the react router and front end skills'.
      </p>
      <div className="home-actions">
        <Link to="/projects" className="btn">
          view projects →  
        </Link>
        <Link to="/about" className="btn btn-ghost">
          about me
        </Link>
      </div>
    </div>
  );
}