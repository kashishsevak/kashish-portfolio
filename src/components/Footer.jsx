import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {year} Kashish Sevak. Built with React &amp; Vite.</span>
        <a href="#hero" className="footer__back">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
