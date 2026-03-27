import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../context/useToast";
import { apps } from "../data/apps";
import { formatCompactNumber } from "../utils/formatters";
import { getInstalledApps, uninstallApp } from "../utils/installationStorage";

export default function InstallationPage() {
  const [installedIds, setInstalledIds] = useState(() => getInstalledApps());
  const { showToast } = useToast();

  const installedApps = useMemo(
    () => apps.filter((app) => installedIds.includes(app.id)),
    [installedIds]
  );

  const handleUninstall = (appId, title) => {
    uninstallApp(appId);
    setInstalledIds((previous) => previous.filter((id) => id !== appId));
    showToast(`${title} uninstalled.`, "info");
  };

  return (
    <div className="page-stack">
      <section className="title-panel">
        <h1>My Installation</h1>
        <p>All apps that you installed from Hero IO are listed here.</p>
      </section>

      {installedApps.length ? (
        <section className="apps-grid">
          {installedApps.map((app) => (
            <article key={app.id} className="app-card installation-card">
              <img src={app.image} alt={app.title} className="app-card-image" />
              <div className="app-card-body">
                <h3>{app.title}</h3>
                <p className="app-company">{app.companyName}</p>
                <div className="app-meta">
                  <span>{formatCompactNumber(app.downloads)} downloads</span>
                  <span>{app.ratingAvg.toFixed(1)} rating</span>
                </div>
                <div className="installation-actions">
                  <Link to={`/apps/${app.id}`} className="view-btn">
                    View Details
                  </Link>
                  <button onClick={() => handleUninstall(app.id, app.title)}>Uninstall</button>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>No Installed Apps</h2>
          <p>Install an app from the Apps page to see it here.</p>
          <Link className="show-all-btn" to="/apps">
            Browse Apps
          </Link>
        </section>
      )}
    </div>
  );
}
