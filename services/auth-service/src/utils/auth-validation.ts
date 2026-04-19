export const validateRegisterInput = (name: string, email: string, password: string) => {
  if (!name || !email || !password) {
    return "Name, email, and password are required";
  }

  if (name.trim() === "") {
    return "Name cannot be empty";
  }

  if (!email.includes("@")) {
    return "Email must be valid";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
};

export const validateLoginInput = (email: string, password: string) => {
  if (!email || !password) {
    return "Email and password are required";
  }

  if (!email.includes("@")) {
    return "Email must be valid";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
};