/**
 * Change the user's password after validating input
 */
export function changePassword(
    currentPassword: string,
    newPassword: string,
    confirmPassword: string
) {
    // Basic validation
    if (!currentPassword || !newPassword || !confirmPassword) {
        throw new Error('All password fields are required');
    }

    if (newPassword !== confirmPassword) {
        throw new Error('New password and confirm password do not match');
    }

    if (newPassword.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    // Simulate password update
    console.log('Password changed successfully');

    // Redirect user to success page
    window.location.href = '/password-changed';
}

/**
 * Force password change on first login or security breach
 */
export function forcePasswordChange() {
    console.warn('Password change required');

    // Redirect user to change password screen
    window.location.href = '/change-password';
}

/**
 * Validate password strength before allowing password change
 */
export function validatePasswordStrength(password: string): boolean {
    // Minimum length requirement
    if (password.length < 8) {
        return false;
    }

    // Must contain at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Must contain at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Must contain at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return false;
    }

    return true;
}

