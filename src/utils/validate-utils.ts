const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^\d+$/;

const validateEmail = (email: string): boolean => {
  if (!email) return false;
  return emailRegex.test(email);
};

const validateLengthStr = (str: string, length: number): boolean => {
  if (!str || str.length < length) {
    return false;
  }
  return true;
};

// export regex
export { emailRegex, phoneNumberRegex };

// expot function
export { validateEmail, validateLengthStr };
