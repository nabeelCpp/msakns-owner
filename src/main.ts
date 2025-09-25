// In a server.url build, Capacitor will open https://msakns.com/owner/ in the webview.
// This file only powers the fallback screen and minor runtime checks.

const retryBtn = document.getElementById('retry');
retryBtn?.addEventListener('click', () => {
  // Kick the app to reload – on device this re-initializes the webview
  location.reload();
});

// Optionally ping the remote (no CORS fetch needed). If offline, you can show a toast.
window.addEventListener('online', () => location.reload());
