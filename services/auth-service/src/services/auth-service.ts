export const createRegisterResponse = (name: string, email: string) => {
    return {
        message: "User registered successfully",
        data: {
            name: name.trim(),
            email,
            role: "user"
        }
    };
}

export const createLoginResponse = (email: string) => {
    return {
        message: "Login successful",
        data: {
            id: "1",
            email,
            role: "user"
        }
    };
}