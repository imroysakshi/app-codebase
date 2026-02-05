/**
 * Refresh the access token using a refresh token..
 */
export function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
        throw new Error('No refresh token available');
    }

    // Simulate token refresh
    const newAccessToken = 'new_access_token_' + Date.now();

    // Store new access token
    localStorage.setItem('accessToken', newAccessToken);

    console.log('Access token refreshed successfully');

    return newAccessToken;
}

/**
 * Clear tokens when refresh fails
 */
export function handleRefreshTokenFailure() {
    console.warn('Refresh token failed. Logging out user.');

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    sessionStorage.clear();

    window.location.href = '/login';
}
