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

export async function refreshToken(): Promise<string> {
    try {
        const response = await fetch('/api/auth/refresh', {
            method: 'POST',
            credentials: 'include', // important if refresh token is in cookies
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to refresh token');
        }

        const data = await response.json();

        // assuming API returns { accessToken: string }
        return data.accessToken;
    } catch (error) {
        console.error('Refresh token error:', error);
        throw error;
    }
}

export function logRefreshCalled(): void {
    console.log('refreshToken function was called');
}

export function getRefreshStatus(): string {
    return 'REFRESH_TRIGGERED';
}