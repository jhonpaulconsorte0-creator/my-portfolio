export default function Footer() {
    return (
      <footer className="footer">
        <div className="container footer-inner">
          <span className="mono">© {new Date().getFullYear()} Jhon Paul Consorte</span>
          <span className="mono footer-note">built with react-router-dom, shipped on vercel</span>
        </div>
      </footer>
    );
  }