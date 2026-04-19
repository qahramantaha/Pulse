export const createRegisterResponse = (name: string, email: string) => {
    return {
        message: "Register request received",
        data: {
            name: name.trim(),
            email
        }
    };
}

export const createLoginResponse = (email: string) => {
    return {
        message: "Login request received",
        data: {
            email
        }
    };
}