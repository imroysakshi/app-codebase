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


