import { Link } from "react-router-dom";
import { formatCompactNumber } from "../utils/formatters";

export default function AppCard({ app }) {
  return (
    <Link to={`/apps/${app.id}`} className="app-card">
      <img src={app.image} alt={app.title} className="app-card-image" />
      <div className="app-card-body">
        <h3>{app.title}</h3>
        <p className="app-company">{app.companyName}</p>
        <div className="app-meta">
          <span>{formatCompactNumber(app.downloads)} downloads</span>
          <span>{app.ratingAvg.toFixed(1)} rating</span>
        </div>
      </div>
    </Link>
  );
}
