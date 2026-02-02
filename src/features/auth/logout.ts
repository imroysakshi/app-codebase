export function logout() {
  // Clear authentication tokens
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  // Optional: clear user session data
  sessionStorage.clear();

  // Redirect to login page
  window.location.href = '/login';
}