import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import { apps } from "../data/apps";
import { formatCompactNumber } from "../utils/formatters";

const topApps = [...apps]
  .sort((first, second) => second.ratingAvg - first.ratingAvg)
  .slice(0, 8);

const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
const averageRating =
  apps.reduce((sum, app) => sum + app.ratingAvg, 0) / (apps.length || 1);

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="hero-banner" aria-label="Hero banner">
        <div className="hero-content">
          <h1>Find Powerful Apps That Fit Your Daily Flow</h1>
          <p>
            Hero IO helps you discover trusted apps, compare download strength, and install
            what matters faster.
          </p>
          <div className="hero-actions" role="group" aria-label="Download options">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" aria-label="Download from Apple App Store">
              App Store
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" aria-label="Download from Google Play Store">
              Play Store
            </a>
          </div>
        </div>
        <img src="/assets/hero.png" alt="Hero IO app discovery platform illustration" />
      </section>

      <section className="stats-grid" aria-label="Platform statistics">
        <article className="stat-card">
          <h3>{apps.length}+</h3>
          <p>Curated Apps</p>
        </article>
        <article className="stat-card">
          <h3>{formatCompactNumber(totalDownloads)}+</h3>
          <p>Total Downloads</p>
        </article>
        <article className="stat-card">
          <h3>{averageRating.toFixed(1)}</h3>
          <p>Average User Rating</p>
        </article>
      </section>

      <section>
        <div className="section-head">
          <div>
            <h2>Top Apps</h2>
            <p>Most trusted apps based on ratings and users.</p>
          </div>
          <Link to="/apps" className="show-all-btn">
            Show All
          </Link>
        </div>

        <div className="apps-grid">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
