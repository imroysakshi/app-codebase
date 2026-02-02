export function logout() {
  // Clear authentication tokens
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  // Optional: clear user session data
  sessionStorage.clear();

  // Redirect to login page
  window.location.href = '/login';
}

export function logoutOnSessionExpiry() {
  // Clear all auth-related storage
  localStorage.clear();
  sessionStorage.clear();

  // Optionally show a message (for UI to consume)
  console.warn('Session expired. Logging out user.');

  // Redirect to login page with query param
  window.location.href = '/login?reason=session-expired';
}