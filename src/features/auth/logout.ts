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

/**
 * Logs out the user but preserves selected localStorage keys
 * Useful for scenarios like "remember theme" or "remember language"
 */
export function logoutPreservingPreferences() {
    // Preserve specific preferences
    const theme = localStorage.getItem('theme');
    const language = localStorage.getItem('language');

    // Clear auth-related storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    sessionStorage.clear();

    // Restore preserved preferences
    if (theme) {
        localStorage.setItem('theme', theme);
    }
    if (language) {
        localStorage.setItem('language', language);
    }

    // Redirect to login page
    window.location.href = '/login';
}