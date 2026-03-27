import { useMemo, useState, useTransition } from "react";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { apps } from "../data/apps";

export default function AppsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("none");
  const [isSearching, startTransition] = useTransition();

  const filteredApps = useMemo(() => {
    const normalizedQuery = searchValue.trim().toLowerCase();

    const byTitle = apps.filter((app) =>
      app.title.toLowerCase().includes(normalizedQuery)
    );

    if (sortValue === "high-low") {
      return [...byTitle].sort((first, second) => second.downloads - first.downloads);
    }

    if (sortValue === "low-high") {
      return [...byTitle].sort((first, second) => first.downloads - second.downloads);
    }

    return byTitle;
  }, [searchValue, sortValue]);

  return (
    <div className="page-stack">
      <section className="title-panel">
        <h1>Explore Apps</h1>
        <p>Browse all apps, search in real time, and sort by downloads.</p>
      </section>

      <section className="apps-filter-row" aria-label="App filtering and search">
        <p>
          Total apps: <strong>{filteredApps.length}</strong>
        </p>
        <div className="filter-controls">
          <input
            type="text"
            value={searchValue}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => {
                setSearchValue(value);
              });
            }}
            placeholder="Search app by title"
            aria-label="Search app by title"
          />
          <select
            value={sortValue}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => {
                setSortValue(value);
              });
            }}
            aria-label="Sort apps by downloads"
          >
            <option value="none">Sort by downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </section>

      {isSearching ? (
        <LoadingSpinner label="Searching apps..." />
      ) : filteredApps.length ? (
        <section className="apps-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>
      ) : (
        <section className="empty-state">No App Found</section>
      )}
    </div>
  );
}
