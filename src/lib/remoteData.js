// Remote data source configuration.
//
// Set VITE_DATA_BASE_URL in a .env file (see .env.example) to load the CSVs
// from any cloud host that serves static files: S3, Cloudflare R2, Google
// Cloud Storage, Azure Blob, Supabase Storage, etc.
//
// The host must contain these files (see CSV format in the README/.env.example):
//   <BASE_URL>/sites.csv
//   <BASE_URL>/monitoring_<SITE_ID>.csv     e.g. monitoring_AA01.csv
//
// and must allow cross-origin GET requests (CORS) from the dashboard's origin.
//
// If VITE_DATA_BASE_URL is empty, the Google Drive IDs below are used (legacy);
// if neither is set (or a fetch fails), the dashboard falls back to the local
// CSVs in /public/data.

export const DATA_BASE_URL = (import.meta.env.VITE_DATA_BASE_URL || "").replace(/\/+$/, "");

// How often to re-fetch in the background, in seconds. 0 disables polling.
export const POLL_SECONDS = Number(import.meta.env.VITE_POLL_SECONDS ?? 60);

export const REMOTE_FILES = {
  // sites: "GOOGLE_DRIVE_FILE_ID",
  // AA01: "GOOGLE_DRIVE_FILE_ID",
};

export function driveUrl(fileId) {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export function remoteConfigured() {
  return Boolean(DATA_BASE_URL) || Object.keys(REMOTE_FILES).length > 0;
}

// Resolve the fetch URL for a logical file key ("sites" or a site id).
// Returns null when no remote source is configured for that key.
export function remoteUrlFor(key) {
  if (DATA_BASE_URL) {
    const file = key === "sites" ? "sites.csv" : `monitoring_${key}.csv`;
    return `${DATA_BASE_URL}/${file}`;
  }
  const id = REMOTE_FILES[key];
  return id ? driveUrl(id) : null;
}
