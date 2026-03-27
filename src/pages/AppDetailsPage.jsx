import { useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useToast } from "../context/useToast";
import { apps } from "../data/apps";
import { formatLongNumber } from "../utils/formatters";
import { installApp, isInstalled } from "../utils/installationStorage";

export default function AppDetailsPage() {
  const { id } = useParams();
  const appId = Number(id);
  const app = apps.find((item) => item.id === appId);
  const { showToast } = useToast();
  const installed = app ? isInstalled(app.id) : false;

  if (!app) {
    return (
      <section className="empty-state">
        <h2>App Not Found</h2>
        <p>The app you are trying to view does not exist.</p>
      </section>
    );
  }

  const handleInstall = () => {
    const hasInstalled = installApp(app.id);

    if (hasInstalled) {
      showToast(`${app.title} installed successfully.`, "success");
    } else {
      showToast(`${app.title} is already installed.`, "info");
    }
  };

  return (
    <div className="page-stack">
      <section className="details-hero">
        <img src={app.image} alt={app.title} className="details-image" />

        <div className="details-summary">
          <h1>{app.title}</h1>
          <p className="app-company">{app.companyName}</p>
          <div className="details-meta">
            <span>Rating: {app.ratingAvg.toFixed(1)}</span>
            <span>Downloads: {formatLongNumber(app.downloads)}</span>
            <span>Reviews: {formatLongNumber(app.reviews)}</span>
            <span>Size: {app.size} MB</span>
          </div>
          <button className="install-btn" onClick={handleInstall} disabled={installed}>
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </section>

      <section className="chart-panel">
        <h2>Review Chart</h2>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#ff7f2a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="description-panel">
        <h2>App Description</h2>
        <p>{app.description}</p>
      </section>
    </div>
  );
}
