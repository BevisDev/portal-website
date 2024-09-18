export function validateEmail(email: string): boolean {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateLengthStr(str: string, length: number) : boolean {
    if (!str || str.length < length) {
        return false;
    }
    return true;
}