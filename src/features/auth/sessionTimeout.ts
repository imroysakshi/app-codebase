/**
 * Check whether the user session has expired
 */
export function isSessionExpired(lastActiveTime: number, timeoutInMinutes: number): boolean {
    const currentTime = Date.now();
    const timeoutInMs = timeoutInMinutes * 60 * 1000;

    return currentTime - lastActiveTime > timeoutInMs;
}


/**
 * Handle session timeout by clearing storage and redirecting user
 */
export function handleSessionTimeout() {
    console.warn('Session timed out');
    localStorage.clear();
    sessionStorage.clear();

    window.location.href = '/login?reason=session-timeout';
}