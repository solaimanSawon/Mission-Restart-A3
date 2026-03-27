const STORAGE_KEY = "hero-io-installed-apps";

export const getInstalledApps = () => {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const isInstalled = (appId) => getInstalledApps().includes(appId);

export const installApp = (appId) => {
  const installed = getInstalledApps();

  if (installed.includes(appId)) {
    return false;
  }

  const updated = [...installed, appId];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return true;
};

export const uninstallApp = (appId) => {
  const installed = getInstalledApps();
  const updated = installed.filter((id) => id !== appId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
