/**
 * Check whether the user session has expired
 */
export function isSessionExpired(lastActiveTime: number, timeoutInMinutes: number): boolean {
    const currentTime = Date.now();
    const timeoutInMs = timeoutInMinutes * 60 * 1000;

    return currentTime - lastActiveTime > timeoutInMs;
}


