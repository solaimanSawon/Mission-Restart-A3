export default function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="loader-wrapper" role="status" aria-live="polite" aria-label={label}>
      <div className="loader-ring" />
      <p>{label}</p>
    </div>
  );
}
