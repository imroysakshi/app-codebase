export function requestPasswordReset(email: string) {
    // Validate email input
    if (!email || !email.includes('@')) {
        throw new Error('Invalid email address');
    }

    // Simulate sending password reset email
    console.log(`Password reset link sent to ${email}`);

    // Redirect user to confirmation page
    window.location.href = '/forgot-password/sent';
}

/**
 * Resend password reset link
 */
export function resendPasswordReset(email: string) {
    if (!email || !email.includes('@')) {
        throw new Error('Invalid email address');
    }

    console.log(`Password reset link resent to ${email}`);
}
