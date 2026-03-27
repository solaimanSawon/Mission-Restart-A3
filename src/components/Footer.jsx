export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Hero IO</h3>
          <p>
            Discover helpful apps faster, compare quality at a glance, and manage your
            installations in one place.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>Top Rated Apps</li>
            <li>Most Downloaded</li>
            <li>Fresh Picks</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms & Privacy</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright {new Date().getFullYear()} Hero IO. Built with React.</p>
    </footer>
  );
}
