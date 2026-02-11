/**
 * Verify the OTP entered by the user during multi-factor authentication
 */
export function verifyOtp(otp: string): boolean {
    // Basic validation
    if (!otp || otp.length !== 6) {
        return false;
    }

    // Simulate OTP verification
    const validOtp = '123456';
    return otp === validOtp;
}

/**
 * Handle MFA failure by clearing temporary auth state
 */
export function handleMfaFailure() {
    console.warn('MFA verification failed');

    sessionStorage.removeItem('mfaSessionId');
    sessionStorage.removeItem('mfaAttempts');

    // Redirect user back to login
    window.location.href = '/login?reason=mfa-failed';
}
